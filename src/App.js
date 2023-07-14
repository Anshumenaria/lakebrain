
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Course/Courses';
import Tuoters from './Components/Tutors/Tuoters';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="about" element= {<About/>}/>
      <Route path="course" element= {<Courses/>}/>
      <Route path="touters" element= {<Tuoters/>}/>
      <Route path="contact" element= {<Contact/>}/>
      


    </Routes>

      
    </BrowserRouter>
  );
}

export default App;
