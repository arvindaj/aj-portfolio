import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import boyy from '../../img2/boyy.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { Link } from 'react-scroll';
 
 

const Intro = () => {
   

  const theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
             <span style={{ color: darkMode ? "white" : "" }}>Hey! I am  </span>
             <span>Arvind</span>
             <span style={{ color: darkMode ? "lightgreen" : "" }}>
              Frontend Developer with high level of experience in web designing </span> <br />
             <span style={{ color: darkMode ? "lightgreen" : "" }} > 
               Live your life <br />Its make own way!
             </span>
        </div>
         <Link to="contact" spy={true} smooth={true}>
          <button className="button
         i-button">Hire me </button>
         </Link>
         
         <div className="i-icons">
           
            <img src={Github}alt=""/>
            <img src={Instagram}alt=""/>
            <img src={LinkedIn}alt=""/>

      
         </div>
          
         </div>
        <div className="i-right">
            <img src={boyy} alt=""/>
               
       </div>
    </div>
  )
}

export default Intro
