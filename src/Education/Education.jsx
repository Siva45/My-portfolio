import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const timelineData = [
  {
    title: "BACHALOR DEGREE",
    date: "JUNE 2019 - MAY 2022",
    university: "MANONMANIAM SUNDARANATH UNIVERSITY",
    description:"I had completed my Bachelor's degree in Bachelor of Computer Application (BCA) from Scott Christian College, Nagercoil."
  },
  {
    title: "MASTER DEGREE",
    date: " - JULY 2022 - APRIL 2024",
    university: "BHARATHIYAR UNIVERSITY",
    description:"I had completed My Master's degree in Master of Computer Application (MCA) from Hindustan College of Arts & Science,Coimbatore."
  },
  {
    title: "REACT.JS COURSE",
    date: "JUN 2024 - JAN 2025",
    university: "Rexcoders",
    description:"I Had completed React.js course in Rexcoders ,Nagercoil"
  },
  {
    title: "INTERNSHIP AT WEB DESIGNER",
    date: "NOV 2024 - JAN 2025",
    university: "Rexcoders",
    description:"I had done Internship at Rexcoders and I had worked in the projects as web designer"
  },
];

const Edu = () => {
      useEffect(() => {
                AOS.init({ 
                  duration: 500,   // 🔥 Increase duration for smoother effect
                  once: false,      // 🔥 Re-trigger animations on scroll up/down
                  mirror: true,     // 🔥 Animate again when scrolling back up
                  easing: "ease-in-out", // 🔥 Smooth transition
                });
                
              }, []);
  return (
    <>
     <div className="bg overflow-hidden" >
         <h1 className="text-center text-3xl text-white font pt-8">Education <i class="fa-solid fa-user-graduate"></i></h1>
    
    <div className="relative flex flex-col items-center  text-white py-20 px-4">
      {/* Vertical Line */}
      <div className="absolute w-1 bg-white h-[500px] left-1/2 transform -translate-x-1/2 hidden md:block">
      </div>

      {/* Timeline Items */}
      {timelineData.map((event, index) => (
        <div key={index} className="w-full max-w-3xl flex flex-col md:flex-row items-center mb-10">
          {/* Left Side (Text) */}
          <div className={`w-full md:w-1/2 px-4 text-center md:text-${index % 2 === 0 ? "right" : "left"} md:pr-10`}>
            <h3 className="text-white text-lg font-semibold"data-aos="fade-right">{event.title}</h3>
            <p className="text-gray-400"data-aos="fade-right">
              {event.date} | <span className="font-bold">{event.university}</span>
            </p>
          </div>

          {/* Circle Icon */}
          <div className="w-10 h-10 bg-gray-900 border-4 border-white rounded-full flex items-center justify-center text-gray-300 text-xl my-4 md:my-0">
            ⬤
          </div>

          {/* Right Side (Description) */}
          <div className="w-full md:w-1/2 px-4 text-center md:text-left md:pl-10">
            <p className="text-gray-400"data-aos="fade-left">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
   
  );
};

export default Edu;
