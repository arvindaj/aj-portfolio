import React from 'react'
import './Skills.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from "react";



const Skills = () => {

  const theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;


  

  return (
    <div className="skills" id="skills">
      {/*leftside*/}
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
      <span>skills</span>
      <spane style={{ color: darkMode ? "lightgreen" : "" }}>
          The consensus from industry professionals is to include 4-6 projects when making a portfolio.
          <br />
          Things I enjoy designing <br/>
          Technial
          <br/>

          React,javascript     <br/><br/>
          And i Try lean new Thinks
         </spane>
        <a href={Resume}><button className="button s-button">Download CV</button> </a>
 
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>


      </div>
      {/*right*/}
      <div className="cards"> 
            <div style={{left:  '24rem', color: darkMode ? "lightgreen" : "" }} >
               <Card
                emoji={HeartEmoji}
                heading={"Design"}
                detail ={"Adobe Premiere Pro,Adobe Photoshop,Snapseed,Capcut"}
               />
               </div>
            <div style={{ top: "12rem",left:"2rem"}}> 
               <Card
               emoji={Glasses}
               heading={"Developer"}
               detail={"react,javascript,html,python"}/>
            </div>
            
            
         <div style={{ top: "25rem",left:"19rem"}}> 
               <Card
               emoji={Humble }
               heading={"Video Editing,Photography"}
               detail={"I am a personable Photographer and Videographer help of ,Adobe Photoshop and video Editing, Reels videos and more."}/>
        </div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
          
      </div>     
    </div>
  )
}

export default Skills
