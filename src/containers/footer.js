import React from 'react'
import Footer from '../Component/footer'
import { AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin, AiFillFacebook} from "react-icons/ai";
import {IconContext} from 'react-icons'
import soraeir from './../assets/soralogo.png'
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <img src={soraeir} />
                <Footer.Column>
                <Footer.Title>Soraeir</Footer.Title>
                    <Footer.Link href="#">Terms and Conditions</Footer.Link>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Contact us </Footer.Link>
                    <Footer.Link href="#">Free services</Footer.Link>
                    <Footer.Link href="#">Plan</Footer.Link>
                  
                </Footer.Column>
                
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                  <IconContext.Provider value={{ color: 'white', size: '5px !important' }}>
                    <Footer.Link href="#"><AiFillFacebook/>&nbsp;&nbsp;&nbsp; Facebook</Footer.Link>
                    <Footer.Link href="#"><AiFillLinkedin/>&nbsp;&nbsp;&nbsp; LinkedIn</Footer.Link>
                    <Footer.Link href="#"><AiOutlineTwitter/>&nbsp;&nbsp;&nbsp; Twitter</Footer.Link>
                    <Footer.Link href="#"><AiOutlineInstagram/>&nbsp;&nbsp;&nbsp; Instagram</Footer.Link>
                    </IconContext.Provider>
                </Footer.Column>
               
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterContainer