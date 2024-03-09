import React, { useState } from 'react'
import "../nav.css"

function Nav({data,type}) {
  const [input,setInput]=useState("")
  function filterData(e){
const inputValue=e.target.value
setInput(inputValue)
data(input)
  }
  function sendData(e){
const value=e.target.innerHTML.toLowerCase()
type(value)
  }
  return (
    <div className='wrapper'>
    <div className='logo-search'>
    <h1>Foody Zone</h1>
    <input type='text' className='search-input' placeholder='Searach Food...' onChange={filterData}/>
    </div>
    <div className='buttons'>
    <button onClick={sendData}>All</button>
    <button onClick={sendData}>Breakfast</button>
    <button onClick={sendData}>Lunch</button>
    <button onClick={sendData}>Dinner</button>
    </div>
    </div>
  )
}

export default Nav