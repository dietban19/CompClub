import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./signup.css";
import { useAuth } from "../../context/AuthContext.jsx";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError("Passwords do not match");
    }
    if (passwordConfirmRef.current.value.length < 6) {
      return setError("Password must be at least 6 characters long");
    }
    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        // usernameRef.current.value,
        passwordRef.current.value
      );

      console.log(showAlert);
      navigate("/login");
    } catch {
      console.log(showAlert);
      setError("Failed to Create Account");
    }
    setLoading(false);
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            {/* <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
            </Form.Group> */}
            <Form.Group id="password" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="passwordConfirom" className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="text" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit" disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already Have an Account? <Link to="/login">Login </Link>
      </div>
    </>
  );
};

export default Signup;
