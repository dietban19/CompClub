import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./signup.css";
import { useAuth } from "../../context/AuthContext.jsx";
const Signup = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        usernameRef.current.value,
        passwordRef.current.value
      );
    } catch {
      setError("Failed to Create Account");
    }
    signup(
      emailRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value
    );
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="passwordConfirom" className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="email" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit" disable={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already Have an Account? Log in
      </div>
    </>
  );
};

export default Signup;
