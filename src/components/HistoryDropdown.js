import React from 'react'
import './App.css'

function HistoryDropdown (props) {
  const faceHistory = props.history.map((face, num) => {
      return (
        <li key={num} className = "faceHistory">{face}</li> )
    })
  const menuSymbol = (props.open ?  "▲" : "▼")
  return (
       <div className = "dropdownContainer" ref = {props.container}>
        <button type="button" className = "dropdownButton" onClick = {props.handleClick}>
          history <span className = "symbol">{menuSymbol}</span>
        </button>
        {props.open && (
          <div className = "dropdown">
            <ul>
              {faceHistory}
            </ul>
          </div>
        )}
      </div>
    )
}

export default HistoryDropdown
