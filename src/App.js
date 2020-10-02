import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import MyLibrary from "./pages/MyLibrary";
import AddBook from "./pages/AddBook";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/mylibrary" component={MyLibrary} />
        <Route exact path="/addbook" component={AddBook} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
