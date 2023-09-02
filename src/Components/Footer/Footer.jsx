import React from 'react'
import'./Footer.css'
import Wave from "../../img/wave.png";
import Linkdin from'@iconscout/react-unicons/icons/uil-linkedin'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Gitub from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100'}}/>
        <div className="f-content">
            <span>jeevarvind489@gmail.com</span>
            <div className="f-icons">
            <Insta color="white" size={"3rem"} />
            <Gitub color="white" size={"3rem"} />
            <Linkdin color="white" size={"3rem"}/>
            </div>
        </div>      
    </div>
  )
}

export default Footer
