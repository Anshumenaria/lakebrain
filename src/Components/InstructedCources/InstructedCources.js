import React from 'react'
import "../InstructedCources/InstructedCources.css"
import one from "../Images/1.jpg";
import two from "../Images/2.jpg";
import three from "../Images/3.jpg";
import four from "../Images/4.jpg";

export default function InstructedCources() {
  return (
    <>
    <div className='container'>
    <div className='Instructed text-success mb-3 mt-3'>Instructed Cources</div>
    
    <div class="row ">
    <div class="col-8">Want someone to instruct you! Nowarries, Here we introduce our CourseMania's
    online tutors to Assist & guide you in your profetional path</div>
    <div class="col-4 ">
    <button type="button" class="btn btn-success InstructedCources_btn">Success</button></div>
    
   </div>

   <div className="populartutors text-success mt-5">Meet Our Popular Tutors</div>
   <div class="row mt-5">
  <div class="col col-lg-3  col-sm-6  "><img className='toutors' src={one} alt="" />
  <div classNam="card-body">
        <h4 classNam="card-title">Unconscious Bias</h4>
        <p classNam="card-text">Duration : 25mins</p>
        <h5><strike>$15.90 </strike>*<i>Free</i></h5>
        <div>cloudAcademy</div>
      
        </div>
  </div>
  <div class="col col-lg-3 col-sm-6"><img className='toutors'  src={two} alt="" />
  <div classNam="card-body">
        <h4 classNam="card-title">Unconscious Bias</h4>
        <p classNam="card-text">Duration : 25mins</p>
        <h5>$15.90 *<i>Free</i></h5>
        <div>cloudAcademy</div>
    
        </div>
  </div>
  <div class="col col-lg-3 col-sm-6"><img className='toutors'  src={three} alt="" />
  <div classNam="card-body">
        <h4 classNam="card-title">Unconscious Bias</h4>
        <p classNam="card-text">Duration : 25mins</p>
        <h5>$15.90 *<i>Free</i></h5>
        <div>cloudAcademy</div>
      
        </div>
  </div>
  <div class="col col-lg-3 col-sm-6"><img className='toutors'  src={four} alt="" />
  <div classNam="card-body">
        <h4 classNam="card-title">Unconscious Bias</h4>
        <p classNam="card-text">Duration : 25mins</p>
        <h5>$15.90 *<i>Free</i></h5>
        <div>cloudAcademy</div>
        
        </div>
  </div>
</div>
   </div>
    </>
  )
}
