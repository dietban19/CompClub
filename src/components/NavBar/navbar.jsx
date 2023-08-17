import React, { useEffect, useState } from "react";
// import Logo from "../../../public/logo.png";
import "./navbar.css";

import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const navbar = () => {
  // Set the initial state of the open based on screen width
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const headerWrapper = document.querySelector(".h-wrapper");
      if (window.scrollY > 0) {
        headerWrapper.classList.add("scrolled");
      } else {
        headerWrapper.classList.remove("scrolled");
      }
    };
    const handleResize = () => {
      // Always open the menu when screen width is greater than 768 pixels
      setOpen(window.innerWidth > 768);
      setNavOpen(window.innerWidth > 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function toggleNav() {
    setTimeout(() => {
      setOpen((prevOpen) => !prevOpen);
      console.log("CHNAGE");
    }, 50);
    if (navOpen) {
      setTimeout(() => {
        setNavOpen((prevOpen) => !prevOpen);
      }, 100);
    } else {
      setNavOpen((prevOpen) => !prevOpen);
    }
  }
  useEffect(() => {
    console.log("NEW", navOpen);
  }, [navOpen]);
  return (
    <section className="navbar-wrapper">
      <div className="flexCenter innerWidth paddings navbar-container">
        <Link to="/">
          <img src="./images/facebook-logo.png" alt="logo" width={100} />
        </Link>
        {/* <div className="test">TEST</div> */}
        <div
          className={`flexCenter h-menu ${open ? "open" : "closed"} ${
            navOpen ? "" : "fullClose"
          }`}
        >
          <div className="navElement">
            {" "}
            <Link to="residencies">About Us</Link>
          </div>
          <div className="navElement">
            {" "}
            <Link to="values">Events</Link>
          </div>
          <div className="navElement">
            {" "}
            <Link to="contact">Blog</Link>
          </div>
          <div className="navElement">
            {" "}
            <Link to="getstart">Contact Us</Link>
          </div>{" "}
          <div className="navElement">
            {" "}
            <Link to="/profile">Profile</Link>
          </div>
          <div className="navElement">
            {" "}
            <button className="button">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>

        <div className="menu-icon">
          <button onClick={toggleNav}>
            {open ? <MdClose size={45} /> : <BiMenuAltRight size={45} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default navbar;
