import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/Home/About/About';
import Contact from './Component/Home/Contact/Contact';
import Services from './Component/Home/Services/Services'
import Navs from './Component/Nav/Nav';
import Team from './Component/Home/TeamSection/Team';
import { FooterContainer } from './containers/footer';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (

  <Routes>
    <Route path="/" element={<><Navs></Navs> <Home/></>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/team" element={<Team/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
   
  );
}

export default App;
