import React from 'react'
import Calories from './Calories'
import { useState } from 'react'
import '../App.css'
const Box = (props) => {
    const [count,setCount] = useState(0)
    const [totalCal,setCal] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        setCal(props.food.cal*count)
    }

    function handleChange(e){
        if(e>=0){
            setCount(e)
        }
        else{
            setCount(0)
        }
    }

    function handelReset(){
        setCount(0)
        setCal(0)
    }
  return (
    <div className='body'>
      {/* <div> */}
        <div className='div'>
            <div>
                <img src={props.food.img} alt=" " />
            </div>
            <div>
                <h3>{props.food.name}</h3>
                <h5>{props.food.cal}</h5>
            </div>
            <div>
                <input type="number" placeholder='Enter a number' defaultValue={count} onChange={(e)=>handleChange(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleSubmit}>+</button>
            </div>
        </div>
      {/* </div> */}
      <Calories name = {props.food.name} totalCal = {totalCal} count = {count}/>
      <button onClick={handelReset} className='resetbtn'>Reset</button>
    </div>
  )
}

export default Box
