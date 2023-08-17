import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import Footer from "../../components/Footer/footer";
import AboutUs from "../../components/AboutUs/aboutus";
import OurTeam from "../../components/OurTeam/ourteam";
import Numbers from "../../components/Numbers/numbers";
import Newsletter from "../../components/Newsletter/newsletter";
function Landing() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <AboutUs />
      <OurTeam />
      <Numbers />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Landing;
