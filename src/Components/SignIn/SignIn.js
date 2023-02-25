import "./SignIn.css";
import logo from "./ecampLogo.png";
import React, { useState } from "react";
import axios from "axios";

function SignIn() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [id, setID] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordAcceptable, setIsPasswordAcceptable] = React.useState();
  const [borderColor, setBorderColor] = React.useState("");
  const [condition, setCondition] = React.useState(true);

  function changeTheme() {
    setIsDarkTheme((prevState) => !prevState);
  }

  let styles = {
    borderColor: borderColor,
  };

  function test() {
    //get request
    // axios.get("https://api.quotable.io/random").then(data => console.log(data.data))
    // console.log("fsfs");
  }

  function formChangeID(event) {
    setID(event.target.value);
    console.log(id);
  }

  // setInterval(function () {
  //   formChangePassword();
  // }, 1);
  function formChangePassword(event) {
    setPassword(event.target.value);
    console.log(event.target.value);
    verifyPassword(event.target.value);
  }

  function verifyPassword(password) {
    //check empty password field
    // if(password.length == 0) {
    //   //  window.alert("Fill the password please!");
    //   //  setIsPasswordAcceptable(false);
    //   setBorderColor("black");
    // }

    //minimum password length validation
    if ((password.length > -1 && password.length < 6) || password.length > 15) {
      //  window.alert("Password length must be atleast 8 characters");
      // setIsPasswordAcceptable(false);
      // setBorderColor("red");

      // //maximum length of password validation
      // if (password.length > 13) {
      //   //  window.alert("Password length must not exceed 15 characters");
      //   // setIsPasswordAcceptable(false);
      //   setBorderColor("red");
      // }
      setBorderColor("red");
    }else if(password !== "" && password.length >= 8 && password.length <= 15) {
      //  alert("Password is correct");
      //  setIsPasswordAcceptable(true);
      setBorderColor("green");
    }

    //check empty password field
    if (password.length === 0) {
      //  window.alert("Fill the password please!");
      //  setIsPasswordAcceptable(false);
      setBorderColor("black");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let formData = {
      id: id,
      password: password,
    };
    console.log(formData);

    // submitToAPI(formData);
    // check if data is valid and return a returnedFlag
    if (condition) {
      window.location.href = "./home";
    } else {
      // request a correct id and password
    }
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
          <form className="signin-form">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="name"
                placeholder="ID"
                required=""
                onChange={formChangeID}
              />
              <label htmlFor="name" className="form__label">
                ID
              </label>
            </div>
            <div className="form__group">
              <input
                type="password"
                className="form__input"
                id="password"
                placeholder="Password [lenght between 8 and 15]"
                required=""
                onChange={formChangePassword}
                style={styles}
              />
              <label htmlFor="password" className="form__label">
                Password [lenght between 8 and 15]
              </label>
            </div>
            <button
              /*href="./home"*/ className="login-button button-1"
              // onSubmit={handleSubmit}
              onClick={handleSubmit}
            >
              Log In
            </button>
          </form>

          <div className="links-container">
            <a href="./forgotPassword" className="button-1">
              {" "}
              Forgot Password?
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

export default SignIn;
