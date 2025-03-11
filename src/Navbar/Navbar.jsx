import Navmbl from "./Navmobile";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
export default function Nav(){
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate =useNavigate();
      useEffect(() => {
            AOS.init({ 
              duration: 500,   // 🔥 Increase duration for smoother effect
              once: false,      // 🔥 Re-trigger animations on scroll up/down
              mirror: true,     // 🔥 Animate again when scrolling back up
              easing: "ease-in-out", // 🔥 Smooth transition
            });
            
          }, []);
          useEffect(() => {
            const handleScroll = () => {
              if (window.scrollY > 50) {
                setIsScrolled(true);
              } else {
                setIsScrolled(false);
              }
            };
        
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
          }, []);
          const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          };
    return(
        <>
        <section className={`fixed top-0 left-0 w-full z-50 flex md:justify-evenly justify-around bg py-4 transition-all duration-300 ${
        isScrolled ? "bg shadow-lg" : "bg-transparent"
      }`}>
            <div>
                <p className="text-xl text-white font">MY PORTFOLIO</p>
            </div>
            <div className="md:block hidden ">
                <ul className="flex gap-8 text-lg text-gray-400 ">
                    <li className="hover:bg-[url('menu-hover.webp')] cursor-pointer" onClick={()=>navigate("/")}>Home</li>
                    <li className="hover:bg-[url('menu-hover.webp')] cursor-pointer"onClick={() => scrollToSection("about")}>About </li>
                    <li className="hover:bg-[url('menu-hover.webp')] cursor-pointer"onClick={() => scrollToSection("services")}>Services </li>
                    <li className="hover:bg-[url('menu-hover.webp')]">Blog</li>
                    <li className="hover:bg-[url('menu-hover.webp')] cursor-pointer" onClick={()=>navigate("/contact")}>Contact</li>
                </ul>
            </div>
            <div className="border border-gray-500 hover:bg-gray-400  rounded-full md:block hidden">
                <p className="text-md  px-4 py-2  text-white cursor-pointer" onClick={()=>navigate("/contact")}>Hire Me <i class="fa-solid fa-angles-right"></i></p>
            </div>
            <div className="md:hidden block">
                <Navmbl/>
            </div>
        </section>
        </>
    )
}