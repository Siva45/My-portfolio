import { motion, useInView } from "framer-motion";
// import { FaDownload } from "react-icons/fa";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const skills = [
  { name: "React.js", percentage: 50 },
  { name: "Javascript", percentage: 60 },
  { name: "Html/CSS", percentage: 70 },
  { name: "Illustration", percentage: 40 },
];

const Skill = () => {
        useEffect(() => {
                AOS.init({ 
                  duration: 500,   // 🔥 Increase duration for smoother effect
                  once: false,      // 🔥 Re-trigger animations on scroll up/down
                  mirror: true,     // 🔥 Animate again when scrolling back up
                  easing: "ease-in-out", // 🔥 Smooth transition
                });
                
              }, []);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
  return (
    <div className="bg2 text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full px-8">
        <div className="flex flex-col md:flex-row items-center  justify-between gap-10">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left md:pt-0 pt-5"data-aos="fade-right">
            <h2 className="text-lg text-gray-400 font">|| Special Skills</h2>
            <h1 className="md:text-5xl text-2xl font-bold mt-2 mb-6 leading-tight font">
              My Special Skill Field Here.
            </h1>
            <a  href="My-Resume.pdf"
              download="My-Resume.pdf" className="flex w-40 items-center gap-2 border border-gray-500 px-6 py-3 rounded-full hover:bg-gray-700 transition mt-4">
              Get Resume <i className="fa-solid fa-download"></i>
            </a>
          </div>

          {/* Right Section - Skill Bars */}
          <div className="md:w-1/2 w-1/1 md:pt-10" ref={sectionRef}>
            {skills.map((skill, index) => (
              <div key={index} className="mb-6 bg p-10"data-aos="fade-left">
                <div className="flex justify-between mb-2 ">
                  <span className="text-lg font">{skill.name}</span>
                  <span className="text-lg font">{skill.percentage}%</span>
                </div>
                <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-white h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${skill.percentage}%` : "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
