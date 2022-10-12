import React , {useState} from 'react'
import {ImagesData} from './ImagesData'
import {FaChevronLeft , FaChevronRight} from 'react-icons/fa'
import { IconContext } from "react-icons";

const MockupSlider = ({slides}) => {
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
     
    <FaChevronLeft className="left-arrow" onClick={prevSlide} />
    <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </IconContext.Provider>
   {ImagesData.map((slide,index)=>{
       return (
           <div className={index===current? 'slide active' : 'slide'} key={index}>
            {index===current && (
                  <img src={slide.img} className="myimages"/>
            )}   
         
           </div>
       )
   })}
   </section>
  )
}

export default MockupSlider