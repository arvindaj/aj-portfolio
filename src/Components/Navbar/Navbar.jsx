import React from 'react'
import './Navbar.css'
import Toggle from "../Toggle/Toggle"
import { Link } from "react-scroll";


const  Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">          
         <div className="n-name">AJ</div>
           <Toggle/>
         </div>
        <div className="n-right">
        <div className="n-list">
                <ul style={{listStyleType:'none'}}>

              <li>
               <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
               </Link>
              </li>

              <li>
                <Link to ="skills" spy={true} smooth={true}>
                Skills
                </Link>
              </li>

              <li>
               <Link to="works" spy={true} smooth={true}>
                Experience
               </Link>
              </li>
                </ul>
            </div>
        </div>
             
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      
    </div>
  )
}

export default Navbar

