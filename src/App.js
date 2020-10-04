import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import Classes from "./App.css";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyLibrary from "./pages/MyLibrary";
import AddBook from "./pages/AddBook";
import DetailBuku from "./pages/DetailBuku";
import AdminPage from "./pages/AdminPage";
import AddBookAdmin from "./pages/AddBookAdmin";

// import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/mylibrary" component={MyLibrary} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/detailbuku" component={DetailBuku} />
          <Route exact path="/adminpage" component={AdminPage} />
          <Route exact path="/addbookadmin" component={AddBookAdmin} />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
