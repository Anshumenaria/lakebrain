import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

// import "../AboutUS/AboutUs.css"
// import '../Header/Header.css';
import "./Header.css"


export default function Header() {
  return (
    <>
    <header className='container'>
        <nav className='main-nav'>
            {/* 1st logo */}
            <div className="logo text-success">
            <h2>CourseMania</h2></div>
             {/* 2nd menu links */}
            <div className="menu-links">
            <ul>
                <li> <NavLink to="/" className="a">Home</NavLink> </li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/course">Course</NavLink></li>
                <li><NavLink to="/touters">Tutors</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul></div> 
            {/*3rd bittons */}
            <div className="buttons">
                <ul>
                <li> <NavLink to="">Login</NavLink> </li>
                <li><button type="button" className='btn btn-success mt-1'>Register</button></li>
                <li> <BsFillCartCheckFill size="30px" color="black"/> </li>
                </ul>
            </div>
            {/* <button onClick={Style.display="none"} className='btn'><AiOutlineMenu size="30px" color="black"/></button> */}
        </nav>
    </header>
    </>
  )
}
