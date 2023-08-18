import React from "react";
import "./aboutUs.css";
import About2 from "../../assets/images/aboutus-1.jpg";
const AboutUs = () => {
  return (
    <div className="au-wrapper">
      <div className="flexColCenter au-container">
        <div className="flexCenter au-header">
          <h1>About Us</h1>
        </div>

        <div className="au-content">
          <div className="imageContainer">
            <img
              src="./images/ourteam.jpg"
              alt="our team"
              className="aboutUsImage"
            />
          </div>

          <div className="au-content__text">
            <p>
              Welcome to the Engineering Club for Software and Computer Students
              at [Your University Name]! We are a passionate group of students
              who share a common interest in software engineering and computer
              science.Our mission is to provide a platform for students to
              learn, collaborate, and innovate in the field of technology
              Whether you're a beginner or an experienced coder, we have
              something for everyone. Join us to expand your knowledge, work on
              exciting projects, and connect with like-minded individuals.
            </p>
          </div>
        </div>
        <div className="au-content">
          <div className="au-content__text">
            <p>
              We organize workshops, coding competitions, hackathons, and
              networking events throughout the year. Get ready to dive into the
              world of coding, problem-solving, and endless possibilities!
              Connect with us on social media and stay updated with our upcoming
              events and activities. We look forward to meeting you and
              embarking on this technological journey together.
            </p>
          </div>
          <div className="imageContainer">
            <img src={About2} alt="about us" />
          </div>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default AboutUs;
