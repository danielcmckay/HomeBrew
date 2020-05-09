import React, { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import HomeBrew from "./components/HomeBrew/HomeBrew";
import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => {
    setIsLoggedIn(true);
  }

  const signup = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <NavBar />
          <HomeBrew />
        </>
      ) : (
        <Login 
          login={login}
          signup={signup}
        />
      )}
    </div>
  );
};

export default App;
