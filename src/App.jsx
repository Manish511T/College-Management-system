import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Course from './components/CourseManagem/course';
import Placement from './components/CollegeManagement/placement';
import Events from './components/CollegeManagement/events';
import About from './pages/About';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course/>}/>
        <Route path='/placement' element={<Placement/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>

  )
}

export default App