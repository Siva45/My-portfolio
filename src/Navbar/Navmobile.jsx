import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import  { useState, useEffect } from "react";
export default function Navmbl() {
  const [isScrolled, setIsScrolled] = useState(false);
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
  const navigate =useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
    <section className="">
    <button onClick={toggleDrawer}><i className="fa-solid fa-bars text-xl text-gray-300"></i></button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=" "
        drawerClassName="" // Apply background to Dr
    >
         <button onClick={toggleDrawer} className=" p-3 ">
         <i class="fa-solid fa-xmark text-xl "></i>
            </button>
       <div className="text-center p-5 ">
        <p className="pb-5" onClick={() => navigate("/")}>Home</p>
        <p className="pb-5" onClick={() => scrollToSection("about")}>About</p>
        <p className="pb-5" onClick={() => scrollToSection("services")}>Services</p>
        <p className="pb-5">Blog</p>
        <p className="pb-5"onClick={() => navigate("/contact")}>Contact</p>
       </div>
      </Drawer>
    </section>
     
    </>
  );
}
