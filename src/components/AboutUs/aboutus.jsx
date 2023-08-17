import React from "react";
import "./aboutus.css"; // You'll need to create a CSS file for styling

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to our club of passionate software engineers! We are a
          close-knit team dedicated to pushing the boundaries of software
          development through projects, challenges, and continuous learning.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to foster a collaborative environment where software
          engineers of all skill levels can come together to create innovative
          solutions, share knowledge, and grow their expertise.
        </p>

        <h3>What We Do</h3>
        <p>
          We embark on exciting projects that tackle real-world problems,
          participate in coding challenges to hone our skills, and engage in
          workshops and discussions to stay updated with the latest trends in
          the tech industry.
        </p>

        <h3>Why Join Us?</h3>
        <p>
          By becoming a part of our club, you'll have the opportunity to work
          with like-minded individuals, enhance your coding abilities,
          contribute to impactful projects, and build a strong professional
          network that will benefit you throughout your career.
        </p>

        <h3>Connect with Us</h3>
        <p>
          Ready to take your software engineering journey to the next level?
          Join us today! Connect with us on social media, attend our events, and
          dive into the world of limitless possibilities in software
          development.
        </p>

        {/* You can add social media icons or links here */}
      </div>
    </section>
  );
};

export default AboutUs;
