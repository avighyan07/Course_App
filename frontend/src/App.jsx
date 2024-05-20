import React from 'react';
import Home from './home/Home';
import Course from './components/Course';
import { Navigate, Route, Routes } from "react-router-dom";

import Courses from './courses/Courses';
import Signup from './components/Signup';
import Books from './books/Books';
import Contacts from './contact/Contacts';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          
          <Route path="/books" element={authUser ? <Books /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

// import React from 'react'

// import Home from './home/Home'
// import Course from './components/Course'
// import {Route,Routes} from "react-router-dom"
// import Courses from './courses/Courses'
// import Signup from './components/Signup'
// import Books from './books/Books'
// import Contacts from './contact/Contacts'
// import { Toaster } from "react-hot-toast";

// function App() {
//   return (<>
//  <div className='dark:bg-slate-900 dark:text-white'>
// <Routes>
//   <Route path="/" element={ <Home/>}/>
//   <Route path="/course" element={ <Courses/>}/>
//   <Route path="/books" element={ <Books/>}/>
//   <Route path="/signup" element={ <Signup/>}/>
//   <Route path="/contact" element={ <Contacts/>}/>
// <Toaster/>
// </Routes>
   
// </div>
//     </>
//   )
// }

// export default App