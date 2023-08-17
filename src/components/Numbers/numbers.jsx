import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import NumbersPic from "../../assets/images/numbersPic.jpg";
import "./numbers.css";
const Numbers = () => {
  const members = 32;
  const alumni = 8;
  const events = 4;
  const projectsCompleted = 13;

  const myRef = useRef(null);
  const myRef2 = useRef(null);
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // 50% intersection threshold
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animateSection");
        } else {
          entry.target.classList.remove("animateSection");
        }
      });
    }, options);
    if (myRef.current) {
      observer.observe(myRef.current);
    }

    const target = document.querySelectorAll(".numbersLeft");
    target.forEach((container) => {
      observer.observe(container);
    });
    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);
  return (
    <div className="numbersWrapper">
      <div className="flexStart innerWidth gridTwo numbersContainer">
        <div ref={myRef2} className="leftAnimation numbersLeft">
          <img src={NumbersPic} alt="" />
        </div>
        <div ref={myRef} className="rightAnimation numbersRight">
          <div className="statsContent">
            <span>
              {" "}
              <CountUp
                start={1}
                end={members}
                duration={2}
                delay={0.5}
                enableScrollSpy={true}
              />
            </span>
            <p>Team Members</p>
          </div>
          <div className="statsContent">
            <span>
              {" "}
              <CountUp
                start={1}
                end={alumni}
                duration={2}
                delay={0.5}
                enableScrollSpy={true}
              />
            </span>
            <p>Alumni</p>
          </div>
          <div className="statsContent">
            <span>
              {" "}
              <CountUp
                start={1}
                end={projectsCompleted}
                duration={2}
                delay={0.5}
                enableScrollSpy={true}
              />
            </span>
            <p>Number of Projects Completed</p>
          </div>
          <div className="statsContent">
            <span>
              <CountUp
                start={1}
                end={events}
                duration={1}
                delay={0.5}
                enableScrollSpy={true}
              />
            </span>
            <p>Number of Events Held</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
