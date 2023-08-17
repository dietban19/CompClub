import React, { useState, useEffect } from "react";
import "./newsletter.css";
const newsletter = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Subscribed with email:", email);
    setEmail("");
  };
  console.log(email);
  return (
    <div className="newsletterWrapper">
      <div className="flexColCenter newsLetterContainer">
        <h2>Subscribe to Our Newsletter for Updates</h2>
        <form className="flexCenter form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default newsletter;
