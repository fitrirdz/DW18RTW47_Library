import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import UseModal from "./UseModal";

const Landing = () => {
  const { isShowing, toggle } = UseModal();
  const { showSignIn, toggleSignIn } = UseModal();

  return (
    <div className="App">
      <Container>
        <Row>
          {/* Kolom Menu */}
          <Col>
            <div>
              <img
                className="Student float-left"
                style={{ height: "50px", width: "50px" }}
                src={require("./images/student1.svg")}
              ></img>
              <h3 className="Library float-left">Lib'rary</h3>
            </div>
            <div style={{ marginTop: "200px" }}>
              <h1>
                <i>Your</i> library anywhere
              </h1>
              <p>
                Sign-up today and receive unlimited access to all of your
                reading - share your books.
              </p>
            </div>
            <div>
              <Button variant="danger" onClick={toggle}>
                Sign Up
              </Button>
              <Button variant="light" onClick={toggleSignIn}>
                Sign In
              </Button>

              <SignUp isShowing={isShowing} toggle={toggle} />
              <SignIn showSignIn={showSignIn} toggleSignIn={toggleSignIn} />
            </div>
          </Col>

          {/* Kolom Gambar */}
          <Col>
            <img
              src={require("./images/Vector1.svg")}
              style={{ margin: "0" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
