const Footer = () => {
    return (
      <footer className="bg2 text-white py-12 px-6">
        {/* Subscribe Section */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-gray-400">|| Get Latest Updates</p>
          <h2 className="md:text-4xl text-3xl font-semibold my-4 font">Subscribe For Newsletter</h2>
  
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <input
              type="email"
              placeholder="demo@example.com"
              className="w-full md:w-96 px-4 py-3 rounded-full bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-3 rounded-full">
              Subscribe Now
            </button>
          </div>
        </div>
  
        {/* Contact & Social Icons */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-10 text-gray-400 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl "><i class="fa-solid fa-phone text-white"></i></span> <p>6381629202</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl"><i class="fa-regular fa-envelope text-white"></i></span> <p>sivaas2702@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a href="https://www.linkedin.com/in/siva-a-s-98762a1b4/"><i class="fa-brands fa-linkedin-in border border-gray-400 p-2 rounded-full text-white"></i></a>
            <a href=""><i class="fa-brands fa-instagram border border-gray-400 p-2 rounded-full text-white"></i></a>
            <a href="https://github.com/Siva45"><i class="fa-brands fa-github border border-gray-400 p-2 rounded-full text-white"></i></a>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="text-center text-gray-400 text-sm mt-8">
          <p>© 2025 Developed By  <i class="fa-regular fa-heart text-white"></i>  SIVA A S</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  