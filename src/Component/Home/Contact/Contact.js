import React from 'react'
import contact from './../../../assets/contact.png'
import './Contact.css'
const Contact = () => {
  return (
    <section className="about" id="contact">
        <div className="container">
            <div className="row last">
            <div className="col-md-6">
                <h2>Get in touch</h2>
                <p>Enter your email and we'll connect you with the right one</p>  <br></br>
                <input type="text" className="form" placeholder="Write your email"/> <br></br>
                
                    <button className="btn-about">Submit</button>

            </div>
            <div className="col-md-5">
               <img src={contact} className="img-contact"/>
                </div>
            </div>

            </div>
            </section>
  )
}

export default Contact