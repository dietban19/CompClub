import React, { useState } from "react";
import "../../App.css";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Footer from "../../components/Footer/footer";
import AboutUs from "../../components/AboutUs/aboutus";
function Landing() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Landing;
