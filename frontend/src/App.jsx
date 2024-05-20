import React from 'react'

import Home from './home/Home'
import Course from './components/Course'
import {Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Books from './books/Books'
import Contacts from './contact/Contacts'
function App() {
  return (<>
 <div className='dark:bg-slate-900 dark:text-white'>
<Routes>
  <Route path="/" element={ <Home/>}/>
  <Route path="/course" element={ <Courses/>}/>
  <Route path="/books" element={ <Books/>}/>
  <Route path="/signup" element={ <Signup/>}/>
  <Route path="/contact" element={ <Contacts/>}/>

</Routes>
   
</div>
    </>
  )
}

export default App