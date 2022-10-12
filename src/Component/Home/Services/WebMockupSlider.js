import React , {useState} from 'react'
import {WebData} from './WebData'
import {FaChevronLeft , FaChevronRight} from 'react-icons/fa'
import { IconContext } from "react-icons";
import "./Image.css"
const WebMockupSlider = ({slides}) => {
    const [current,setCurrent]=useState(0);
    const leng =slides.length;

    const nextSlide =()=>{
        setCurrent(current===leng-1 ? 0 : current + 1);
    }
    const prevSlide =()=>{
        setCurrent(current===0? leng - 1 : current - 1);
    }
  if(!Array.isArray(slides) || slides.leng <=0){
      return null;
  }
  return (
   <section className="slider">
    <IconContext.Provider
      value={{ color: 'black', size: '50px' }}
    >
     
    <FaChevronLeft className="left-arrow2" onClick={prevSlide} />
    <FaChevronRight className="right-arrow2" onClick={nextSlide} />
    </IconContext.Provider>
   {WebData.map((slide,index)=>{
       return (
           <div className={index===current? 'slide active' : 'slide'} key={index}>
            {index===current && (
                  <img src={slide.img} className="myWebimages"/>
            )}   
         
           </div>
       )
   })}
   </section>
  )
}

export default WebMockupSlider