import React from 'react'
import '../App.css'
const Search = (props) => {
  return (
    <div>
      <div className='src'>
        <h2>Search</h2>
        <input type="search" className='srcbox'  onChange={e=>{props.handleSearch(e)} }  />
      </div>
    </div>
  )
}

export default Search
