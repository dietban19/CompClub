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
              <Link to="residencies">About Us</Link>
            </div>
            <div className="navContainer">
              {" "}
              <Link to="values">Events</Link>
            </div>
            <div className="navContainer">
              {" "}
              <Link to="contact">Blog</Link>
            </div>
            <div className="navContainer">
              {" "}
              <Link to="getstart">Contact Us</Link>
            </div>
            <div className="navContainer">
              {" "}
              <button className="button">
                <Link to="contact">Join Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="footerRight">
          <img src="./images/instagram-logo.png" />
          <img src="./images/facebook-logo.png" alt="" />
        </div>
      </div>
      <span className="flexCenter copyright">Copyright @ 2023 Team </span>
    </div>
  );
};

export default footer;
