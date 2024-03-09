import React,{useState,createContext} from 'react'
import Nav from './components/Nav'
import Cards from './components/Cards'

function App() {
  
  const [input,setInput]=useState(null)
  const [filteredData,setFilteredData]=useState([])
  const [data,setData]=useState([])
   function getData(value){

const filter=data.filter(data=>data.name.toLowerCase().includes(value.toLowerCase()))
setFilteredData(filter)
setData(filter)
  }

  function getType(type){
    if(type==="all"){
      setFilteredData(data)
      return 
    }
 const filter=data.filter(data=>data.type.toLowerCase().includes(type))
 setFilteredData(filter)

  }
  return (
    <React.Fragment>
 
    <Nav data={getData} type={getType}></Nav>
    <Cards data={data} setData={setData} filteredData={filteredData} setFilteredData={setFilteredData}></Cards>

    </React.Fragment>
  )
}

export default App