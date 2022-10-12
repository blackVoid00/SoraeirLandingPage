import React ,{useState}from 'react'
import './Nav.css'
import {Navbar , Container , Nav} from 'react-bootstrap'
const Navs = () => {
  const [navbar,setNavbar]=useState(false)
  //const [link,setLink]=useState(false)
  const changeBackground=()=>{
    if(window.scrollY >=585){
     
      setNavbar(true)
     
    }else{
     
      setNavbar(false)
     
    }}
    // const changeColor=()=>{
    //   if(window.scrollY >=585){
    //     setLink(true)
     
       
    //   }else{
    //     setLink(false)
    
       
    //   }}

  
  window.addEventListener('scroll',changeBackground)
  return (
    <Navbar className={navbar ? 'active': ''} expand="lg" sticky="top" >
    <Container>
      <Navbar.Brand href="#home" >Soraeir</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
         <Nav.Link  href="#home"    >Home</Nav.Link>
          <Nav.Link href="#services"  >Services</Nav.Link>
          <Nav.Link href="#team"    >Team</Nav.Link>
          <Nav.Link href="#about" >About</Nav.Link>
          <Nav.Link href="#contact"  >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navs