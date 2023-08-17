import React, { useState } from "react";
// import Landing from "./pages/Landing/landing";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Navbar from "./components/Header/header";
import Footer from "./components/Footer/footer";
function App() {
  const location = useLocation();

  // Define an array of route paths where you want to hide the Navbar and Footer
  const hiddenRoutes = ["/"];

  // Check if the current location is in the hiddenRoutes array
  const shouldHideNavbarAndFooter = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
