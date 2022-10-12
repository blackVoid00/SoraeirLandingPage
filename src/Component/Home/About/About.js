import React from 'react'
import './About.css'
import about from './../../../assets/about.png'
const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row last">
            <div className="col-md-6">
                <h2>About Us</h2>
                <p>Our Vision is to give everyone easy access to medicines.
                    We help pharmacies deliver their products and services available faslty and safely using 100% autonomous drones.</p>
                    <button className="btn-about">Learn More</button>
            </div>
            <div className="col-md-6">
               <img src={about} className="img-about"/>
                </div>
            </div>

            </div>
            </section>
  )
}

export default About