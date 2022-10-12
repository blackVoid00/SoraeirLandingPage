import React from 'react'
import Data from '../../../Data'
import Servitem from './Servitem'
import './Services.css'
import MockupSlider from './MockupSlider'
import WebMockupSlider from './WebMockupSlider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import googleplay from './../../../assets/googleplay.png'
import apple from './../../../assets/apple.png'
import {ImagesData} from './ImagesData'
import {WebData} from './WebData'
const Services = () => {
    const item = Data.serv.map((itembox)=>{
        return (
            <div className="col-md-4">
              <Servitem icons= {itembox.icons} title={itembox.title} text={itembox.text}/>
            </div>
        )
    })
  
  return (
    <section className="services" id="services" >
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 ">
                <h2>our services</h2>
                <h4>we create innovative solutions by connecting customers, pharmacies and drones  whilst making sure we have a sustainable impact 
                on our communities and ecosystems
                    we’re a tech-first, responsible company</h4>
            </div>
            </div>
            <div className='row'>
                {item}
                <button className="btn-1">Learn More</button>
            </div>
          
            <div className="row last">
                <div className="col-md-6">
                    <h2>Download</h2>
                    <h4>Our mobile app</h4>
                    <p>Order your medicine from anywhere and track it in real time with the Soraeir App. </p>
                     
                          <button className="btn-2"> Google play <img  className="icon" src={googleplay}/></button>&nbsp;
                          <button className="btn-3"> App store <img  className="icon" src={apple}/></button>
                        
                       
                </div>
                <div className="col-md-5">
                <MockupSlider className="sliderteam" slides={ImagesData}/>
                </div>
            </div>
            <div className="row last2">
                <div className="col-md-6">
                    <h2>Ready to get Started ?</h2>
                    <h4>Contact us and get your Soraeir Kit</h4>
                    <p>Soraeir is an embedded system kit that will
                         allow you to deliver your medicines easily and faslty using 100% autonomous drones.
                         It also provides you with a simple, easy to use web dashboard to track your deliveries/drone telemetry in a real time mode. </p>
                        <button className="btn-5" > Contact us under Below </button>&nbsp;
                        
                        
                       
                </div>
                <div className="col-md-5 col">
                <WebMockupSlider className="sliderweb" slides={WebData}/>
                </div>
            </div>
         
         
           
        </div>

    </section>
  )
}

export default Services