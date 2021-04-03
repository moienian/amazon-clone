import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sing In</h1>
        <form className="login__form">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" />

          <button className="login__singInButton">Sing In</button>
        </form>

        <p>
          By singing-in you agree to the AMAZON FAKE CLONE Conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
