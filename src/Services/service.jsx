import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const responsive = {
  
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const services = [
  {
    title: "Web Development",
    icon: <i class="fa-solid fa-code"></i>,
    items: ["HTML/CSS", "JavaScript", "Animation", "WordPress", "React"],
  },
  {
    title: "UI/UX Design",
    icon: <i class="fa-solid fa-pen"></i>,
    items: ["Landing Pages", "User Flow", "Wireframing", "Prototyping", "Mobile App Design"],
  },

  {
    title: "Illustration",
    icon:  <i class="fa-solid fa-bezier-curve"></i>,
    items: ["Character Design", "Icon Set", "Illustration Guide", "Illustration Set", "Motion Graphic"],
  },
 
];
const repeatedServices = [...services,...services,...services];
const CustomDots = ({ index, onClick, active }) => {
  
    return index < 3 ? ( // ✅ Only show 3 dots
      <button
        className={`w-3 h-3 mx-1 rounded-full ${
          active ? "bg-white" : "bg-gray-500"
        }`}
        onClick={onClick}
      />
    ) : null;
  };

const ServicesCarousel = () => {
    useEffect(() => {
              AOS.init({ 
                duration: 500,   // 🔥 Increase duration for smoother effect
                once: false,      // 🔥 Re-trigger animations on scroll up/down
                mirror: true,     // 🔥 Animate again when scrolling back up
                easing: "ease-in-out", // 🔥 Smooth transition
              });
              
            }, []);
  return (

    <div id="services" className="w-full bg2 text-white px-5 py-10 ">
        <div className="md:pl-25 pl-5">
            <p className="border-l-2 pl-2 text-gray-400 text-lg ">My Services</p>
            <p className="md:text-5xl text-2xl font pt-10 pb-8">Services Provide For My Clients.</p>
        </div>
      <Carousel
        responsive={responsive}
        autoPlay={false} // Manual click navigation
        infinite={true} // Ensures no blank slides
        transitionDuration={1000}
        containerClass="flex  justify-center :mlgx-30 md:mx-20 "
        itemClass="px-4"
        showDots={true} // ✅ Enables dots for navigation
        arrows={false} // ✅ Removes arrows
        customDot={<CustomDots />}
        dotListClass="custom-dot-list-style  !mt-8"
      >
        {repeatedServices.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-[350px] bg p-6 justify-items-center  shadow-lg "
            data-aos="fade-left">
            <div className="text-4xl mb-4 my-4  pb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 pb-4">{service.title}</h3>
            <ul className="text-gray-400 pb-4">
              {service.items.map((item, i) => (
                <li key={i} className="py-1 ">➤ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
