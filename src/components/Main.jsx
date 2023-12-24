import Hero from "./Hero";
import Nav from "./Nav";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="bg-indigo-600">
      <Nav />
      <Hero />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Main;
