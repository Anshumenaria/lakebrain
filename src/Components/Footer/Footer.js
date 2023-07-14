import React from 'react'
import "../Footer/Footer.css"
// import AiFi from "./AiFillInstagram";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <>
    <div className="container-fluid mt-5 bg-success text-white">
    <div className="container Footer ">
     <div>
      
            <div>About us</div>
            <div>Contact us</div>
            <div>Carrier us</div>
            <div>Blog</div>
      
     </div>
     <div><ul>
            <div>Udemi Busness</div>
            <div>Teach on udemy</div>
            <div>Get the app</div>
        </ul>
        </div>
     <div><ul>
            <div>Help and support</div>
            <div>privacy podivcy</div>
        </ul>
        </div>
     </div>

     
     </div>
     <div className="socialMedia text-dark bg-success">
        <ul>
            <li>Followus:</li>
            
            <li><AiFillInstagram size="30px" color="white"/></li>
            <li><AiFillFacebook size="30px" color="white"/></li>
            <li><AiFillTwitterCircle size="30px" color="white"/></li>
            <li><AiOutlineYoutube size="30px" color="white"/></li>
        </ul>
     </div>
    </>
   
  )
}
