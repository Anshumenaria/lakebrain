import React from 'react'
import Header from '../Header/Header'
import "./Home.css"


import PopularCources from '../PopolarCources/PopularCources';
import Cirtification from '../Cirtification/Cirtification';
import InstructedCources from '../InstructedCources/InstructedCources';
import Footer from '../Footer/Footer';
import Headerimg from './Headerimg';



export default function Home() {
  return (
    <>
    <Header/>
    <Headerimg/>

    
    <PopularCources/>
    <Cirtification/>
    <InstructedCources/>
    <Footer/>
    

   
    </>
  )
}
