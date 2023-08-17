import React, { useEffect } from "react";

import aboutUs1Image from "../../../public/images/aboutus-1.jpg";
import aboutUs2Image from "../../../public/images/aboutus2.jpg";
import aboutUs3Image from "../../../public/images/aboutus-3.jpg";
import aboutUs4Image from "../../../public/images/aboutus4.png";
import aboutUs5Image from "../../../public/images/aboutus5.jpeg";

import "./aboutus.css"; // You'll need to create a CSS file for styling

const AboutUs = () => {
  useEffect(() => {
    const auContainers = document.querySelectorAll(".auContainer");
    const imageContainers = document.querySelectorAll(".imageContainer");

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.5, // 50% intersection threshold
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // Apply animation class
        }
        // else {
        //   entry.target.classList.remove("animate"); // Remove animation class
        // }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    auContainers.forEach((container) => {
      observer.observe(container);
    });

    imageContainers.forEach((container) => {
      observer.observe(container);
    });
    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, []);
  const booleans =
    aboutUs1Image &&
    aboutUs2Image &&
    aboutUs3Image &&
    aboutUs4Image &&
    aboutUs5Image;
  console.log(booleans);
  return (
    <section className="aboutusWrapper">
      <div className="aboutUsContainer">
        <div className="auContainer">
          <h2>About Us</h2>
          <p>
            Welcome to our club of passionate software engineers! We are a
            close-knit team dedicated to pushing the boundaries of software
            development through projects, challenges, and continuous learning.
          </p>
        </div>
        <div className="imageContainer">
          <img src={aboutUs1Image} alt="three people working" loading="lazy" />
        </div>
        <div className="imageContainer">
          <img src={aboutUs2Image} alt="man speaking" loading="lazy" />
        </div>

        <div className="auContainer">
          <h3>Our Mission</h3>
          <p>
            Our mission is to foster a collaborative environment where software
            engineers of all skill levels can come together to create innovative
            solutions, share knowledge, and grow their expertise.
          </p>
        </div>

        <div className="auContainer">
          {" "}
          <h3>What We Do</h3>
          <p>
            We embark on exciting projects that tackle real-world problems,
            participate in coding challenges to hone our skills, and engage in
            workshops and discussions to stay updated with the latest trends in
            the tech industry.
          </p>
        </div>
        <div className="imageContainer">
          <img src={aboutUs3Image} alt="two men with hard hats thumbs up" />
        </div>
        <div className="imageContainer">
          {" "}
          <img src={aboutUs5Image} alt="three people working" />
        </div>

        <div className="auContainer">
          {" "}
          <h3>Why Join Us?</h3>
          <p>
            By becoming a part of our club, you'll have the opportunity to work
            with like-minded individuals, enhance your coding abilities,
            contribute to impactful projects, and build a strong professional
            network that will benefit you throughout your career.
          </p>
        </div>

        <div className="auContainer">
          {" "}
          <h3>Connect with Us</h3>
          <p>
            Ready to take your software engineering journey to the next level?
            Join us today! Connect with us on social media, attend our events,
            and dive into the world of limitless possibilities in software
            development.
          </p>
        </div>
        <div className="imageContainer">
          <img src={aboutUs3Image} alt="four people working" loading="lazy" />
        </div>

        {/* You can add social media icons or links here */}
      </div>
    </section>
  );
};

export default AboutUs;
