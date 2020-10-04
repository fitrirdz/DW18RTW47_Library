import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseModal from "../components/UseModal";
import SignUp from "./SignUp";

const SignIn = ({ showSignIn, toggleSignIn }) => {
  const { isShowing, toggle } = UseModal();

  const [state, dispatch] = useContext(CartContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email + ":" + password);
    if (email === "frd@mail.com" && password === "1111") {
      console.log("Berhasil");
      dispatch({
        type: "LOGIN",
      });
    } else {
      console.log("Gagal");
    }
  };

  return (
    <Modal show={showSignIn} keyboard={false} centered onHide={toggleSignIn}>
      <Modal.Body>
        <h2>Sign In</h2> <br />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <Link to="/home">
              <button
                className="Button-o"
                type="submit"
                style={{ width: "100%" }}
              >
                Sign In
              </button>
            </Link>
          </div>
        </form>
        <p style={{ textAlign: "center" }}>
          Don't have an account ? Click{" "}
          <a href="#" onClick={toggle}>
            Here
          </a>
        </p>
        <SignUp isShowing={isShowing} toggle={toggle} />
        {/* <h1 className="text-success">
          {state.isLogin ? "LOGIN STATE" : "NOPE"}
        </h1> */}
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;
