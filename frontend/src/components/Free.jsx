



import React, { useEffect, useState } from 'react';
// import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logout from "./Logout";
import { useAuth } from "../context/Authprovider";
import Login from './Login';

const Free = () => {
// const filterfree=list.filter((data)=>data.price===0)
const [courses, setCourses] = useState([]);
const [authUser, setAuthUser] = useAuth();
useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get("http://localhost:4001/course");

        const data = res.data.filter((data) => data.price === 0);
        console.log(data);
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-40">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          
        </div>

        <div>
          <Slider {...settings}>
            {/* {filterfree.map((item) => (
              <Cards item={item} key={item.id} />
            ))} */}
            {courses.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
        
      </div>
      {/* <Logout></Logout> */}
      {authUser ? (
              <Logout />
            ) : (
              
                <Login />
              
            )}
    </>
  );
}
export default Free;
{/* <div className="flex justify-end">
            <Link to="/course">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Next
              </button>
            </Link>
          </div> */}