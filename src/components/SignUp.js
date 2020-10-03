import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const SignUp = ({ isShowing, toggle }) => {
  return (
    <Modal show={isShowing} keyboard={false} centered onHide={toggle}>
      <Modal.Body>
        <h2>Sign Up</h2> <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="Full Name" required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" defaultValue="Gender required">
              <option selected disabled value="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control type="tel" placeholder="Phone" required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              required
              as="textarea"
              placeholder="Address"
              rows={3}
            />
          </Form.Group>
        </Form>
        <Button className="btn btn-block" variant="danger" type="submit">
          Submit
        </Button>
        <p style={{ textAlign: "center" }}>
          Already have an account ? Klik <a href="#">Here</a>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
