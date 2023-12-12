import React from 'react'
import '../App.css'
const Calories = (props) => {
  return (
    <div>
      <h2>'{props.count} {props.name} = {props.totalCal} calories' </h2>
    </div>
  )
}

export default Calories
