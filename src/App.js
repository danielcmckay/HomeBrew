import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomeBrew from "./components/HomeBrew/HomeBrew";
import Login from "./components/Login/Login";
import Favorites from "./components/Pages/Favorites";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
  };

  const signup = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  let routes;

  !isLoggedIn
    ? (routes = <Route path='/' exact><Login login={login} signup={signup} /></Route>)
    : (routes = (
        <>
          <NavBar logout={logout} />
          <Route path='/' exact><HomeBrew /></Route>
          <Route path='/favorites' exact><Favorites /></Route>
        </>
      ));

  return (
    <div className="App">
      <Router>
        <Switch>{routes}</Switch>
      </Router>
    </div>
  );
};

export default App;
