import React from 'react'
import { getEmotionObjects } from '../actionCreators/emotionCreation.js'
import EmotionForm from './EmotionForm'
import HistoryDropdown from './HistoryDropdown'
import './App.css'

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

  handleClickOutside = event => {
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
        <div className = "container">
          <h1><a href="/">how are you feeling?</a></h1>
          <EmotionForm
              value = {this.state.currentValue}
              onSubmit = {this.handleSubmit}
              onChange = {this.handleChange}/>

          <div className="faceDisplay">{this.state.currentFace}</div>
          <HistoryDropdown
            history = {this.state.history}
            open = {this.state.historyDropdownOpen}
            handleClick = {this.handleHistoryDropdownClick}
            container = {this.historyDropdownContainer}/>
        </div>
      )
  }
}

export default App
