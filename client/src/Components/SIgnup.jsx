import React, { useState } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SIgnup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const submitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center  text-dark justify-content-center my-5">
      <Form
        className="border border-2 p-3 d-grid bg-secondary w-50 h-50"
        onSubmit={submitHandle}
      >
        <FormText className="fs-4 fw-bold mb-4 text-center">
          Sign Up Form
        </FormText>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Register
        </Button>
        <FormText>
          <NavLink to="/" className="my-4">
            Already have an account? Login
          </NavLink>
        </FormText>
      </Form>
    </div>
  );
}

export default SIgnup;
