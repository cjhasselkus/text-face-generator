import React from 'react'
import './App.css'

function EmotionForm(props) {
    return (
       <form onSubmit={props.onSubmit}>
        <label>
        <input type="text" name="name" onChange = {props.onChange} placeholder="enter an emotion!" className = "inputBox"/>
        </label>
        <input type="submit" value="go" className ="goButton"/>
      </form>
    )
}

export default EmotionForm
