import React, { useState, useEffect, useRef } from "react";
import "./ourteam.css";
const ourteam = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Intersection threshold (0.5 means 50% of the element visible)
    };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation");
        }
      });
    }, observerOptions);

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation");
        }
      });
    }, observerOptions);
    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }

    if (rightRef.current) {
      rightObserver.observe(rightRef.current);
    }
    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, []);

  return (
    <div className="ourTeamWrapper">
      <div className="white-gradients"></div>
      <div className="flexCenter innerWidth paddings gridTwo ourTeamContainer">
        <div ref={leftRef} className="flexColStart leftAnimation ourTeamLeft">
          <h1>Our Team</h1>
          <p>
            Discover the faces behind the innovation at our Computer Engineering
            Club. Our tight-knit group brings diverse skills and a shared
            passion for technology. From coding to hardware, we're united by a
            drive to push boundaries and create the future. Get to know us and
            our journey of exploration and collaboration
          </p>
          <button className="button">Meet Our Team</button>
        </div>
        <div ref={rightRef} className="rightAnimation ourTeamRight">
          <img src="./images/ourteam.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ourteam;
