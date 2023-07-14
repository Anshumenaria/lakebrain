import React from 'react'
// import Header from '../Header/Header'
import "./Home.css"
import Anshu from "../Images/LB.webp";
// import { FcSearch } from "react-icons/fc";

export default function Headerimg() {
  return (
    <>
    
    {/* Image section */}
    <div className="image-container">
        <img src={Anshu} alt="" />
        <div className='text-overlay'>
          <input type="text" placeholder=' search for courses'  />          
        </div>
        <h3 className='img_text' >Explore What Professionals like you are Learning The Most </h3>
        <button className='button1'>Visit Course</button>
      </div>
    {/* Image section */}
    


    {/* NAv */}
    <div className='Academy'>      
        <div>Udemy</div>
        <div>KhanAcademy</div>
        <div>cloudAcademy</div>
        <div>Coursera</div>      
    </div>

    {/* NAv */}
    </>
  )
}
