import React from 'react'
import four from "../Images/4.jpg";
import five from "../Images/5.jpg";
import six from "../Images/6.jpg";

export default function Cirtification() {
  return (
    <>
    <div className='text-success container mt-2 '>Cirtification Courses</div>
  
    <div className='container mt-5'>
    <div class="row">
        <div class="col "><div classNam="card  " >
        <img classNam="card-img-top" src={four} alt="Card image"/>
        <div classNam="card-body">
        <h4 classNam="card-title">Unconscious Bias</h4>
        <p classNam="card-text">Duration : 25mins</p>
        <h5><strike>$15.90</strike> *<i>Free</i></h5>
        <div>cloudAcademy</div>
        <a href="#" className="btn btn-outline-success ">Enroll Now</a>
        </div>
        </div>
        <a href="">view more info</a>
        </div>
  <div class="col "><div class="col"><div classNam="card " >
        <img classNam="card-img-top" src={five} alt="Card image"/>
        <div classNam="card-body">
        <h4 classNam="card-title">Communication</h4>
        <p classNam="card-text">Duration : 50mins</p>
        <h5>$15.90 </h5>
        <div>Khan Academy</div>
        <a href="#" className="btn btn-outline-success bin-sm">Enroll Now</a>
        </div>
        </div></div>
        <a href="">view more info</a>
        </div>
  <div class="col"><div class="col"><div classNam="card" >
        <img classNam="card-img-top" src={six} alt="Card image"/>
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
