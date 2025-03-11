import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const projects = [
  {
    title: "Ecommerce Website",
    image: "p1.png",
    heading: "Ecommerce Website Template ",
    link: "https://gadgets-ecommerce-6n3j-git-main-siva-a-ss-projects.vercel.app/",
  },
  {
    title: "Company Portfolio",
    image: "p2.png",
    heading: "Company Portfolio Template",
    link: "https://company-website-solutions.netlify.app/",
  },
];

const Project = () => {
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
      <section className="bg text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Title Section */}
          <div className="text-center mb-12"data-aos="fade-down">
            <h3 className="text-lg text-gray-400 font">|| Awesome Portfolio</h3>
            <h2 className="md:text-5xl text-2xl font font-bold mt-2">
              My Complete Projects
            </h2>
          </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-right">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer group"
              >
                {/* ✅ Ensure the link wraps the image properly */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:h-70 h-40 md:object-fill object-contain transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0  bg-black bg-opacity-50 opacity-0 group-hover:opacity-100  flex items-center justify-center transition-opacity duration-500">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl font-bold text-white"
                  >
                    {project.title}
                  </a>
                </div>
                <p className="pl-2 p-3 font text-xl text-white">
                  {project.heading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
