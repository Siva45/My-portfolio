import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Hero() {
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
      <section className="lg:flex  justify-center bg md:gap-25 pt-15">
        <div className="text-white lg:text-start text-center">
          <p className="font xl:text-6xl md:text-5xl text-3xl pb-8 pt-8"data-aos="fade-up">
            Hello! I'm
          </p>
          <p className="font xl:text-8xl md:text-7xl text-3xl pb-8 "data-aos="fade-up">
            <span className="namebg">SIVA A S</span>
          </p>
          <p className="pb-8 text-gray-400"data-aos="fade-up">
            Web Develepor specializing in Reactjs
          </p>
          <div className="pt-8  lg:pb-0 pb-8">
            <a
              href="My-Resume.pdf"
              download="My-Resume.pdf"
              className="border border-gray-400 md:p-4 p-3 rounded-full hover:bg-gray-600"
            >
              Get Resume <i className="fa-solid fa-download"></i>
            </a>
          </div>
          <div className="lg:flex items-center gap-4 xl:mt-40 lg:mt-15  hidden ">
            <i className="fa-solid fa-play bg-gray-600 p-8 rounded-full "></i>
            <p className="text-gray-400 ">Watch Video</p>
          </div>
        </div>

        <div className="md:block hidden">
          <div className="relative flex items-center justify-center min-h-screen ">
            <div className="relative ">
              <img
                src="mypic.png"
                alt="Profile"
                className="xl:h-[700px] lg:h-[500px] md:h-[500px] h-[300px] relative "data-aos="fade-right"
                />

              <svg
                className="absolute xl:top-1/2 top-75 left-44   transform xl:-translate-y-1/3 md:-translate-y-1/2 -translate-y-1/1 xl:h-[500px] xl:w-[400px] "
                viewBox="0 0 400 700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 250 0 C 400 200, 400 500, 250 700"
                  stroke="gray"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <div className="absolute xl:top-[-170px] xl:right-[120px] top-[-150px] right-[50px] w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 bg-[#131722] text-white hover:bg-blue-500 transition"  data-aos="fade-left">
                 <a href="https://www.linkedin.com/in/siva-a-s-98762a1b4/"><i class="fa-brands fa-linkedin-in rounded-full text-white"></i></a> 
                </div>
                <div className="absolute xl:top-[-70px] xl:right-[68px]  top-[-60px] right-[10px] w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 bg-[#131722] text-white hover:bg-green-500 transition" data-aos="fade-left">
                  <a href="https://github.com/Siva45"><i class="fa-brands fa-github rounded-full text-white"></i></a>
                </div>
                <div className="absolute xl:top-[40px] xl:right-[40px] top-[60px] right-[0px] w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 bg-[#131722] text-white hover:bg-pink-600 transition" data-aos="fade-left">
                  <a href=""><i class="fa-brands fa-instagram rounded-full text-white"></i></a>
                </div>
                <div className="absolute xl:top-[160px] xl:right-[50px] top-[180px] right-[30px] w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 bg-[#131722] text-white hover:bg-red-700 transition" data-aos="fade-left">
                  <a href="mailto:sivaas2702@gmail.com"><i class="fa-solid fa-envelope rounded-full text-white"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
