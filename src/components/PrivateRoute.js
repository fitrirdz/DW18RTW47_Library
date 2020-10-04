import React, { useContext } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state, dispatch] = useContext(CartContext);
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isLogin ? history.push("/") : <Redirect to="/landing" />
      }
    />
  );
};

export default PrivateRoute;
