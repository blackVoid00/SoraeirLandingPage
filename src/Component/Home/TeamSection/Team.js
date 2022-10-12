import React from 'react'
import Data from "../../../Data"
import {FaLinkedin,FaTwitter,FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";

import './Team.css'
const Team = () => {
    const itemteam=Data.team.map((item) =>{
        return (
            <div className="col-sm-4">
                <div className="card text-center" id='hello'>
                <div className="overflow">
                        <img  src={item.image} className="card-img-top"/>
                    </div>
                    <div className="card-body text-dark">
                 
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text text-secondary">{item.profession}</p>
                {/* <a href="#" >Go anywhere</a> */}
                <IconContext.Provider value={{ color: 'black', size: '10px !important' }}>
                <FaLinkedin/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaTwitter/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaFacebookF/>
                </IconContext.Provider>
                    </div>
                </div>
            </div>
        )
    })
  return (
   
    <section className="team"  id="team">
     <div className="container">
         <div className="row">
             <div className="col-md-12 col-lg-12">
             <h2 className="h2oflast2">OUR TEAM</h2>
            <p>Meet our devoted team working full time to innovate and solve cities problems using lastest technology.</p>
             </div>
         </div>
         <div className="row">
          {itemteam}
         </div>
     </div>
    </section>
  )
}

export default Team