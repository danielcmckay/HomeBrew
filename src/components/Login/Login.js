import React, { useState } from "react";
import "./Login.css";
import { ReactComponent as Logo } from "../../images/undrawparty.svg";

const Login = (props) => {
  return (
    <div className="Login">
      <h1 className="Title">HomeBrew</h1>
      <div className="LoginContainer">
        <div className="LoginLeft">
          <h2 className="SubTitle">Find out what's on tap.</h2>
          <form className="LoginForm">
            <span className="Formspan">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="test@test.com" />
            </span>
            <span className="Formspan">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="test123" />
            </span>
            <div className="LoginBtns">
              <button onClick={props.login}>Login</button>
              <button onClick={props.signup}>Sign Up</button>
            </div>
          </form>
        </div>
        <div className="LoginRight">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Login;
