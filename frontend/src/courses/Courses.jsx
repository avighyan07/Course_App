import React from 'react'
import Navbar from '../components/Navbar'
import list from "../../public/list.json"

import Course from '../components/Course'
import Footer from '../components/Footer'
const Courses = () => {
    return (
      <>
      <Navbar />
      <Course/>
      <Footer/>
      
      </>
      
    )
  }
  
  export default Courses