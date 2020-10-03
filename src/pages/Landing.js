import React from "react";
import { Row, Col } from "react-bootstrap";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UseModal from "../components/UseModal";

const Landing = () => {
  const { isShowing, toggle } = UseModal();
  const { showSignIn, toggleSignIn } = UseModal();

  return (
    <div className="App">
      <div className="container-fluid">
        <Row>
          {/* Kolom Menu */}
          <Col className="mt-5">
            <div>
              <img
                className="Student"
                src={require("../images/student1.svg")}
                alt="images"
              ></img>
              <img
                className="Library"
                src={require("../images/Library.svg")}
                alt="images"
              ></img>
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
              <button className="btn Button-o" onClick={toggle}>
                Sign Up
              </button>
              <button className="btn bg-light" onClick={toggleSignIn}>
                Sign In
              </button>

              <SignUp isShowing={isShowing} toggle={toggle} />
              <SignIn showSignIn={showSignIn} toggleSignIn={toggleSignIn} />
            </div>
          </Col>

          {/* Kolom Gambar */}
          <Col>
            <img
              src={require("../images/Vector1.svg")}
              style={{ margin: "0" }}
            ></img>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Landing;
