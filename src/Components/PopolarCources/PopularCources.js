import React from 'react'
import one from "../Images/1.jpg";
import two from "../Images/2.jpg";
import three from "../Images/3.jpg";
import "../PopolarCources/PopularCources.css"


export default function PopularCources() {
  return (
    <>
   <div className=' container mt-2 text-success'>Popular Courses</div>
   
    <div className='container mt-5 PopularCources_card'>
    <div class="row">
        <div class="col"><div classNam="card" >
        <img classNam="card-img-top" src={one} alt="Card image"/>
        <div classNam="card-body">
        <h4 classNam="card-title">Unconscious Bias</h4>
        <p classNam="card-text text-success">Duration : 25mins</p>
        <h5><strike>$15.90</strike> *<i>Free</i></h5>
        <div>cloudAcademy</div>
        <a href="#" className="btn btn-outline-success ">Enroll Now</a>
        </div>
        </div>
        <a href="">view more info</a>
        </div>
  <div class="col"><div class="col"><div classNam="card" >
        <img classNam="card-img-top" src={two} alt="Card image"/>
        <div classNam="card-body">
        <h4 classNam="card-title">Communication</h4>
        <p classNam="card-text text-success">Duration : 50mins</p>
        <h5>$15.90 </h5>
        <div>Khan Academy</div>
        <a href="#" className="btn btn-outline-success bin-sm">Enroll Now</a>
        </div>
        </div></div>
        <a href="">view more info</a>
        </div>
  <div class="col"><div class="col"><div classNam="card" >
        <img classNam="card-img-top" src={three} alt="Card image"/>
        <div classNam="card-body">
        <h4 classNam="card-title text-success">Unconscious Bias</h4>
        <p classNam="card-text text-success">Duration : 1hour 12mins</p>
        <h5>$10.90</h5>
        <div>Khan Academy</div>
        <a href="#" className="btn btn-outline-success bin-sm">Enroll Now</a>
        </div>
        </div></div>
        <a href="">view more info</a>
        </div>
</div>
</div>
    </>
  )
}
