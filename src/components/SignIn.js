import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Modal } from "react-bootstrap";

const SignIn = ({ showSignIn, toggleSignIn }) => {
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
    if (email === "fitri@mail.com" && password === "1111") {
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
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-danger btn-block" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <p style={{ textAlign: "center" }}>
          Don't have an account ? Klik <a href="#">Here</a>
        </p>
        <h1 className="text-success">{state.isLogin ? "BERHASIL" : "GAGAL"}</h1>
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;
