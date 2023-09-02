import React from 'react'
import "./Contact.css";
import emailjs  from "@emailjs/browser";
import {useRef,useState} from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";



const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const form =useRef();
  const [done, setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ejs0mh4",
                    "template_3t00l9t", 
                    form.current,"Z-Wq0JM0fVfwgUTyS"
      )
      .then( (result) => {
          console.log(result.text);
        
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 return (
     <div className="contact-from" id="contact">
       <div className="w-left">
          <div className= "awesome">
               <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
               <span>Contact me </span>
               <div className="blur s-blurl"
                    style={{ background:" #ABF1FF94"}}></div>

          </div>
       </div>
       <div className="c-right">
        <form ref={form}onSubmit={sendEmail}>
             <input type="text" name="user_name" className="user" placeholder="Name"/>
             <input type="email" name="user_email" className="user" placeholder="Email"/>
             <textarea type="message" name="user" className="user" placeholder="Message"/>
             <input type="submit" value="Sent" className="button"/>
             <span>{done && "Thank for contact me!"}</span>
             <div
                 className="blur c-blurl"
                 style={{ background:"var(--purple)"}}></div>

             

        </form>
       </div>


    </div>
    


  )
}

export default Contact
