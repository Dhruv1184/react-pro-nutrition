import { useState } from 'react'
import Box from './components/Box'
import FoodData from './resources/FoodData'
import Search from './components/search'
import './App.css'

function App() {
  const [searched,setSearch] = useState('')
  const [TCost,setCost] = useState(0)

  function handleSearch(e){
    setSearch(e.target.value)
  }
  return (
    <>
    <div>
      <Search handleSearch ={handleSearch}/>
      {FoodData.filter((item)=>{
        if (searched === ''){
          return item
        }else if(item.name.toLowerCase().includes(searched.toLowerCase())){
          return item
        }
      }).map(food =>{
        return(
          <div key={food.id}>
            <Box food = {food} totalCost={TCost}/>
          </div>
        )
      })}
    </div>
     
    </>
  )
}

export default App
