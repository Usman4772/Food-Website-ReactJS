import React, { useEffect, useState , useContext ,createContext} from 'react'

import "../cards.css"
const BASE_URL="http://localhost:9000"

function Cards({data,setData,filteredData,setFilteredData}) {

  
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)

  useEffect(()=>{
    setLoading(true)
    try{
     
    async function fetchData(){

      const res=await fetch(BASE_URL)
      const json=await res.json()
      setLoading(false)
      setFilteredData(json)
      setData(json)
      
    
    }
    
    fetchData()
  
  }catch(err){
    setError(error)
  }

  },[])

  if(loading)return <h1 className='loading'> loading....</h1>
  if(error)return <h1>{error}</h1>


  return (
    <div className='main-section'>
    {filteredData.map(data=>{
return  <div className='card'>
<div className='image-container'>
<img src={BASE_URL + data.image} />
</div>
<div className='text-container'>
<h2>{data.name}</h2>
<p>{data.text}</p>
<button className='price-btn'>{data.price} $</button>
</div>
</div>
    })}
   
    </div>
  )
}

export default Cards