import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const SignIn = ({ showSignIn, toggleSignIn }) => {
  return (
    <Modal show={showSignIn} keyboard={false} centered onHide={toggleSignIn}>
      <Modal.Body>
        <h2>Sign In</h2> <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
        </Form>
        <Button className="btn btn-block" variant="danger" type="submit">
          Sign In
        </Button>
        <p style={{textAlign: "center"}}>
          Don't have an account ? Klik <a href="#">Here</a>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;
