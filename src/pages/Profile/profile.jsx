import React, { useState } from "react";
import "./profile.css";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
const profile = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const { signOutFunc } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    setError("");
    try {
      await signOutFunc();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div className="profileWrapper">
      <div className="flexCenter paddings profileContainer">
        <div className="email">{currentUser && currentUser.email}</div>

        {error && <Alert variant="danger">{error}</Alert>}
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default profile;
