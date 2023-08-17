import React from "react";
import "./hero.css";
import HeroImage from "../../assets/images/HeroImage.jpg";
const hero = () => {
  const HeroImages =
    "https://res.cloudinary.com/dx0n3s9h4/image/upload/v1692278014/compEng_mejwqg.jpg";
  if (HeroImages) {
    console.log("loaded");
  }
  return (
    <>
      {HeroImages && (
        <div className="hero-wrapper">
          <div className="paddings innerWidth gridTwo heroContainer">
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
              <img
                src="https://res.cloudinary.com/dx0n3s9h4/image/upload/v1692278014/compEng_mejwqg.jpg"
                alt="person working on computer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default hero;
