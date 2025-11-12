import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
// import Testimonials from "./Testimonials";
// import VisionMission from "./VisionMission";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div className="w-100" style={{ margin: 0, padding: 0 }}>
      <Hero />
      <About />
      <Services />
      {/* <Testimonials />
      <VisionMission /> */}
      <Contact />
    </div>
  );
};

export default Home;
