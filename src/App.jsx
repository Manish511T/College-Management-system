import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Course from './components/CourseManagem/course';
import Placement from './components/CollegeManagement/placement';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course/>}/>
        <Route path='/placement' element={<Placement/>}/>
      </Routes>
    </Router>

  )
}

export default App