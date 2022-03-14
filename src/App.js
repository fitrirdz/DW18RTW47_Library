import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyLibrary from './pages/MyLibrary';
import AddBook from './pages/AddBook';
import DetailBuku from './pages/DetailBuku';
import Baca from './pages/Baca';
import AdminPage from './pages/AdminPage';
import AddBookAdmin from './pages/AddBookAdmin';

// import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/mylibrary' component={MyLibrary} />
          <Route exact path='/addbook' component={AddBook} />
          <Route exact path='/detailbuku' component={DetailBuku} />
          <Route exact path='/baca' component={Baca} />
          <Route exact path='/adminpage' component={AdminPage} />
          <Route exact path='/addbookadmin' component={AddBookAdmin} />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
