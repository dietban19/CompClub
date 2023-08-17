import React, { useEffect, useState } from "react";
// import Logo from "../../../public/logo.png";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const Header = () => {
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
      setOpen(window.innerWidth > 1024);
      setNavOpen(window.innerWidth > 1024);
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
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="" alt="logo" width={100} />
        {/* <div className="test">TEST</div> */}
        <div
          className={`flexCenter h-menu ${open ? "open" : "closed"} ${
            navOpen ? "" : "fullClose"
          }`}
        >
          <div className="navElement">
            {" "}
            <Link
              to="residencies"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              About Us
            </Link>
          </div>
          <div className="navElement">
            {" "}
            <Link
              to="values"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              Events
            </Link>
          </div>
          <div className="navElement">
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              Blog
            </Link>
          </div>
          <div className="navElement">
            {" "}
            <Link
              to="getstart"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              Contact Us
            </Link>
          </div>
          <div className="navElement">
            {" "}
            <button className="button">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
              >
                Join Now
              </Link>
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

export default Header;
