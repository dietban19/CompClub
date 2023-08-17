import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="f-wrapper">
      <div className="flexStart f-container">
        <div className="flexStart footerLeft">
          <div className="logo">LOGO</div>
          <div className="flexStart nav">
            <div className="navContainer">
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
            <div className="navContainer">
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
            <div className="navContainer">
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
            <div className="navContainer">
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
            <div className="navContainer">
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
        </div>
        <div className="footerRight">
          <img src="./images/instagram-logo.png" />
          <img src="./images/facebook-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default footer;
