
// import "./SignIn.css";
import logo from "./ecampLogo.png";
import React, { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  function changeTheme() {
    setIsDarkTheme((prevState) => !prevState);
  }

  function test(){
    //get request
    axios.get("https://api.quotable.io/random").then(data => console.log(data.data))
  }

  return (
    <div className={isDarkTheme ? " container dark" : "container"}>
      <div className="signin-card">
        <div className="singin-image-container">
          <img className="singin-image" src={logo} alt="" />
        </div>

        <div className="signin-info">
          {/* <div className="input-container">
            <label htmlFor="">ID</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div> */}
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              id="name"
              placeholder="ID"
              required=""
            />
            <label htmlFor="name" className="form__label">
              ID
            </label>
          </div>
          <div className="form__group">
            <input
              type="text"
              className="form__input"
              id="ssn"
              placeholder="SSN"
              required=""
            />
            <label htmlFor="ssn" className="form__label">
              SSN
            </label>
          </div>
          <a href="./firstTime" className="login-button button-1" onClick={test}>Claim Password</a>

          <div className="links-container">
            <a href="./signIn" className="button-1">
              {" "}
              Already Have An Account?
            </a>
            <a href="./firstTime" className="button-1">
              {" "}
              First Time Login?
            </a>
          </div>
        </div>
      </div>

      <div className="toggle-container">
        <label htmlFor="toggle-theme" className="switch">
          <input onChange={changeTheme} id="toggle-theme" type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      {/* <button className="theme-button" onClick={changeTheme}>
        {" "}
        Change Theme{" "}
      </button> */}
    </div>
  );
}

// export default FirstTimeLogin;

// import React from 'react'

// export default function FirstTimeLogin() {
//   return (
//     <div>FirstTimeLogin</div>
//   )
// }
