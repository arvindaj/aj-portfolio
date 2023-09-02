import React from 'react'
import './Works.css'
import Pricol from "../../img2/pricol.jpg"
import Ps from "../../img2/ps.jpg"
import Upwork from "../../img2/pricol.jpg"
import Dc from "../../img2/dc.png"
import Vsv from "../../img2/vsv.jpg"
import { useContext } from "react";
import { themeContext } from "../../Context";


const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
  <div className="works" id="works">

    
     <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>Works for All These</span>
      <span>MNC & Companise</span>
      <spane style={{ color: darkMode ? "lightgreen" : "" }}>
           Hands-on experience using <br />
            React, Tailwind, HTML, CSS and  Javascript

          <br />
          <br/>
          I genuinely care about people, and love helping fellow designers work on their craft.
      </spane>
      <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
     </div>

    <div className="w-right">
      <div className="w-mainCircle">
        <div className="w-secCircle">
          <img src={Pricol} alt=""/>
        </div>

        <div className="w-secCircle">
           <img src={Ps} alt=""/>
        </div>
        <div className="w-secCircle">
           <img src={Upwork} alt=""/>
        </div>
        <div className="w-secCircle">
           <img src={Dc} alt=""/>
        </div>
        <div className="w-secCircle">
           <img src={Vsv} alt=""/>
        </div>
      </div>
      <div className="w-backCircle blueCircle"></div>
      <div className="w-backCircle yellowCircle"></div>

    </div>


  </div>
  )
}

export default Works
