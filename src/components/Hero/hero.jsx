import React from "react";
import "./hero.css";
const hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexColCenter heroContainer">
        {/* Hero Left */}
        <div className="flexColStart hero-left">
          <h1>Coding Minds Unite</h1>
          <h3 className="secondaryText">
            Join the Computer Engineering Revolution
          </h3>
          <button
            onClick={() => {
              console.log("HELO");
            }}
            className="button"
          >
            Join Now
          </button>
        </div>
        {/* Hero Right */}
        <div className="hero-right">
          <img src="./images/compEng.jpg" alt="person working on computer" />
        </div>
      </div>
    </div>
  );
};

export default hero;
