import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Map from "../components/Map";
import LogoSlider from "../components/LogoSlider";

function Home() {
  return (
    <div>
      <Hero />
      <LogoSlider />
      <Map />
      <Footer />
    </div>
  );
}

export default Home;
