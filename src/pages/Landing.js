import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UseModal from "../components/UseModal";
import Classes from "../App.css";

const Landing = () => {
  const { isShowing, toggle } = UseModal();
  const { showSignIn, toggleSignIn } = UseModal();

  return (
    <div>
      <div className="landing-page">
        <div className="row">
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
