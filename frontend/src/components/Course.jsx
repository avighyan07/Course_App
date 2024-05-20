import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get('http://localhost:4001/course');
        setCourses(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCourses();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
      <h1>
        <span className="text-red-500 text-4xl pt-9 mb-12 block">COURSE CENTRE</span>
      </h1>
      <div className="items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you <span className="text-pink-500">Here! :)</span>
        </h1>
        <h1 className="mt-12">
            Explore our wide range of courses and select the
            ones that best suit your interests and career goals. Whether you're looking to
            develop new skills, advance your career, or pursue a passion, we have something for everyone.
            From <span className="text-pink-500">JEE</span> and <span className="text-pink-500">NEET</span> to <span className="text-pink-500">BOARDS</span> and <span className="text-pink-500">CODING</span>, our courses are designed to provide you with the knowledge and expertise you need to succeed. Choose your desired courses today and embark on a journey of learning and growth tailored to your unique aspirations.
          </h1>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;

// import React, { useEffect, useState } from "react";
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // import list from "../../public/list.json";
// import Cards from './Cards';
// import { Link } from 'react-router-dom';
// const Course = () => {
//   const [course, setcourse] = useState([]);
//   useEffect(() => {
//     const getcourse = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/course");
//         console.log(res.data);
//         setcourse(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getcourse();
//   }, []);
//   return (
//     <>
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28"> {/* Adjusted padding */}
//       <h1 > <span className="text-red-500 text-4xl pt-9 mb-9 justify-between">COURSE CENTRE</span></h1>
//         <div className="items-center justify-center text-center">
//           <h1 className="text-2xl md:text-4xl">
//             We're delighted to have you{" "}
//             <span className="text-pink-500">Here! :)</span>
//           </h1>
//           <p className="mt-12">
//             Explore our wide range of courses and select the
//             ones that best suit your interests and career goals. Whether you're looking to
//             develop new skills, advance your career, or pursue a passion, we have something for everyone.
//             From <span className="text-pink-500">JEE</span> and <span className="text-pink-500">NEET</span> to <span className="text-pink-500">BOARDS</span> and <span className="text-pink-500">CODING</span>, our courses are designed to provide you with the knowledge and expertise you need to succeed. Choose your desired courses today and embark on a journey of learning and growth tailored to your unique aspirations.
//           </p>
//           <Link to="/">
//           <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//             Back
//           </button>
//           </Link>
//         </div>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Added gap for spacing */}
//           {/* {list.map((item) => (
//             <Cards key={item.id} item={item} />
//           ))} */}
//           {course.map((item) => (
//             <Cards key={item.id} item={item} />
//           ))}
//           <Link to="/">
//           <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//             Back
//           </button>
//           </Link>
//         </div>
        
//       </div>
      
//     </>
//   );
// }

// export default Course;
