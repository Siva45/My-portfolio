import About from "../About/About";
import Edu from "../Education/Education";
import Footer from "../Footer/footer";
import Hero from "../Herosection/Hero";
import Nav from "../Navbar/Navbar";
import Project from "../Projects/project";
import ServicesCarousel from "../Services/service";
import Skill from "../Skills/skills";


export default function Home(){
    return(
        <>
      <Nav/>
      <Hero/>
      <About/>
      <ServicesCarousel/>
      <Edu/>
      <Skill/>
      <Project/>
      <Footer/>
        </>
    )
}