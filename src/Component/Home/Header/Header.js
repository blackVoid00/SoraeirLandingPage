import React from 'react'
import './Header.css'
import video from './../../../assets/viddeei.mp4'

const Header = () => {
  return (
    <header>
       <div className="header-overlay" id="home">
       <div className="container">
        <div className="videobg">
        <video autoPlay loop src={video} type="video/mp4"></video>
        </div>
            <div className="row">
                <div className="col-lg-12">
                    <h2>We help pharmacies deliver faster 
                    and reliable with our autonomous drones</h2>
                    <p>we are just a click away</p>
                    <button className="">grab yours</button>

                </div>
            </div>
        </div>

       </div>
    </header>
  )
}

export default Header