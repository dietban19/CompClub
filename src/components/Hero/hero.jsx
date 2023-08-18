import React from "react";
import "./hero.css";
import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../../assets/images/HeroImage.jpg";
const hero = () => {
  const HeroImages =
    "https://res.cloudinary.com/dx0n3s9h4/image/upload/v1692278014/compEng_mejwqg.jpg";
  if (HeroImages) {
    console.log("loaded");
  }
  const handleType = (count) => {
    // Reset index to 0 after the third sentence
    if (count === 3) {
      index.current = 0;
    }

    // access word count number
    console.log(count);
  };
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const slogans = [
    "Coding the Future, Line by Line.",
    "Sculpting the Digital Landscape.",
    "Creating Code, Crafting Change.",
    "Inspiring Minds, Igniting Code.",
    "Building Tomorrow's Tech, Today.",
    "Engineering Dreams through Code.",
    "Crafting Software, Engineering Excellence.",
    "Transforming Lines into Solutions.",
  ];
  return (
    <>
      {HeroImages && (
        <div className="hero-wrapper">
          <div className="paddings innerWidth gridTwo heroContainer">
            {/* Hero Left */}
            <div className="flexColCenter hero-left">
              <h1>
                {" "}
                <Typewriter
                  words={slogans}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  cursorBlinking={false}
                  deleteSpeed={30}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </h1>
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
