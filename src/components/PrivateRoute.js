import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(CartContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLogin ? <Redirect to="/home" /> : <Redirect to="/landing" />
      }
    />
  );
};

export default PrivateRoute;
