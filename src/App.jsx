import React, { useState } from "react";
// import Landing from "./pages/Landing/landing";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Navbar from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/profile";
import Nav from "./components/NavBar/navbar";
import AboutUs from "./pages/AboutUs/aboutUs";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  const location = useLocation();

  // Define an array of route paths where you want to hide the Navbar and Footer
  const hiddenRoutes = ["/", "/signup", "/login"];

  // Check if the current location is in the hiddenRoutes array
  const shouldHideNavbarAndFooter = hiddenRoutes.includes(location.pathname);

  return (
    <AuthProvider>
      <>
        {!shouldHideNavbarAndFooter && <Nav />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signup"
            element={
              <Container
                style={{ minHeight: "100vh" }}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Signup />
                </div>
              </Container>
            }
          />{" "}
          <Route
            path="/login"
            element={
              <Container
                style={{ minHeight: "100vh" }}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Login />
                </div>
              </Container>
            }
          />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        {!shouldHideNavbarAndFooter && <Footer />}
      </>
    </AuthProvider>
  );
}

export default App;
