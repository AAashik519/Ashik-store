import React, { useState } from 'react'
 import './Slider.scss'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
const Slider = () => {
  const prevSlide=()=>{
     setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev -1)
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1)
  }

  const [currentSlide ,setCurrentSlide]=useState(0)
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className='slider'> 
    <div className="container" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
     {
      data?.map((img ,i)=>(
         <img src={img} key={i} />
        ))
     }
         
    </div>
    <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon/>  
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />
        </div>
    </div>
    
    </div>
  )
}

export default Slider