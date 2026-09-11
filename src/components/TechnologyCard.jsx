import React, { useEffect, useState } from 'react'
import TechnologyList from './TechnologyList'

const TechnologyCard = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("/data.json")
    .then((res)=>res.json())
    .then((data)=>{
      setData(data)
    })
  },[])

  return (
    <div className='max-w-[1200px] mx-auto '>
      <div>
        <h1 className='text-[33px] font-bold'>Explore the <span className='text-[#EC4899]'>Technologies</span></h1>
        <p className='text-black/50'>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className='grid grid-cols-3 mt-10 gap-6'>
        {
          data.map((item)=> <TechnologyList item={item}/>)
        }
      </div>
    </div>
  )
}

export default TechnologyCard
