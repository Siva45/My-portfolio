import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function About(){
     useEffect(() => {
            AOS.init({ 
              duration: 500,   // 🔥 Increase duration for smoother effect
              once: false,      // 🔥 Re-trigger animations on scroll up/down
              mirror: true,     // 🔥 Animate again when scrolling back up
              easing: "ease-in-out", // 🔥 Smooth transition
            });
            
          }, []);
    return(
        <>
        <section id="about" className="lg:flex lg:justify-center gap-20 lg:items-center bg2 lg:pt-10 pt-5 lg:justify-items-start justify-items-center overflow-hidden">
            <div data-aos="fade-right">
                <img src="abt.png" alt="" className="xl:h-[600px] lg:h-[360px] md:h-[300px] h-[250px] lg:items-start items-center"  />
            </div> 
            <div className="bg xl:p-8 p-5   lg:mx-0 md:mx-40 mx-2"data-aos="fade-left">
                <div className="sm:p-3">
                    <p className="text-white md:text-3xl text-xl md:pb-4 pb-2 font-bold">ABOUT <span className="text-gray-400">ME</span> </p>
                    <p className="md:max-w-sm  text-justify text-white md:pb-4 pb-2">Hi, I'm Siva, a passionate web developer with experience in building responsive and user-friendly websites. I specialize in React.js, JavaScript, and modern web technologies to create seamless digital experiences. I love turning ideas into functional and visually appealing web applications.</p>
                    <div className=""> 
                    <p className="text-white md:p-2 "data-aos="fade-up"><span className="text-gray-400 font-bold ">NAME</span> : SIVA A S</p>
                    <p className="text-white md:p-2 "data-aos="fade-up"><span className="text-gray-400 font-bold ">DATE OF BIRTH</span> : 27 February 2002</p>
                    <p className="text-white md:p-2 "data-aos="fade-up"><span className="text-gray-400 font-bold ">NATIONALITY</span> : Indian</p>
                    <p className="text-white md:p-2 "data-aos="fade-up"><span className="text-gray-400 font-bold ">ADDRESS</span> : Kanniyakumari,Tamilnadu</p>
                    <p className="text-white md:p-2 "data-aos="fade-up"><span className="text-gray-400 font-bold ">PHONE</span> : 6381629202</p>
                    <p className="text-white md:p-2 "data-aos="fade-up"><span className="text-gray-400 font-bold ">EMAIL</span>: sivaas2702@gmail.com</p>
                    </div>
                  
                </div>
            </div>
        </section>
        </>
    )
}