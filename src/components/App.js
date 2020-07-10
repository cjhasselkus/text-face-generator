import React from 'react'
import { getEmotionObjects } from '../actionCreators/emotionCreation.js'
import EmotionForm from './EmotionForm'
import Title from './Title'
import HistoryDropdown from './HistoryDropdown'
// import './App.css'
import * as S from './styles/AppStyles'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [],
      emotionsList: getEmotionObjects(),
      currentFace: "",
      currentValue: "",
      historyDropdownOpen: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleHistoryDropdownClick = this.handleHistoryDropdownClick.bind(this)
  }

  //container for the dropdown to handle closing dropdown on click outside dropdown
  historyDropdownContainer = React.createRef()

  //functions for handling dropdown outclicks
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
    this.getEmotion()
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    if (this.historyDropdownContainer.current && !this.historyDropdownContainer.current.contains(event.target)) {
      this.setState({
        historyDropdownOpen: false,
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getEmotion()
  }

  handleChange(event) {
    this.setState({
      currentValue: event.target.value.toLowerCase()
    })
  }

  handleHistoryDropdownClick(event) {
    this.setState({
      historyDropdownOpen: !this.state.historyDropdownOpen
    })
  }

  getEmotion() {
    const { emotionsList } = this.state
    if (this.state.currentValue === "") {
      let emotion = emotionsList[Math.floor(Math.random()*emotionsList.length)]
      this.generateFace(emotion)
    } else {
      //find the emotion that has a keyword matching with the input text
      for(let emotion of emotionsList) {
        if(emotion.includesKeyword(this.state.currentValue)) {
          this.generateFace(emotion)
        }
      }
    }
  }

  generateFace(emotion) {
    const currentFace = this.state.currentFace
    const history = this.state.history.slice()
    const eyeIndex = emotion.getEyes()
    const mouthIndex = emotion.getMouth()
    const armIndex = emotion.getArms()


    this.setState({
      history: [currentFace].concat(history),
      currentFace:
               (emotion.arms[armIndex][0] +
                emotion.eyes[eyeIndex][0] +
                emotion.mouths[mouthIndex] +
                emotion.eyes[eyeIndex][1] +
                emotion.arms[armIndex][1])
    })
  }

  render() {
    return (
      <S.Content>
        <S.Container>
          <Title text='How are you feeling?'/>
          <S.Box>
            <S.Subtitle>Enter an emotion to generate a face</S.Subtitle>
            <EmotionForm
              value = {this.state.currentValue}
              onSubmit = {this.handleSubmit}
              onChange = {this.handleChange}/>

            <S.Display id='faceDisplay'>
              {this.state.currentFace}
            </S.Display>
          </S.Box>
        </S.Container>
      </S.Content>
    )
  }
}

export default App
