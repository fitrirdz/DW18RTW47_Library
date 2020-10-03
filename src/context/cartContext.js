import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  carts: [
    {
      title: "What if? Absurd question",
      author: "Randall Munroe",
      image: require("../images/WhatIf.svg"),
    },
    {
      title: "Glyph: New look on things",
      author: "Morris Williamson",
      image: require("../images/Glyph.svg"),
    },
    {
      title: "Harry Potter and Goblet of fire",
      author: "J. K. Rowling",
      image: require("../images/HarryPotter.svg"),
    },
    {
      title: "Tess on the Road",
      author: "Rachel Hartman",
      image: require("../images/TessRoad.svg"),
    },
  ],
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {props.children}
    </CartContext.Provider>
  );
};
