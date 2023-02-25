import "./Home.css";
import logo from "./ecampLogo.png";
import Main from './Main/Main.js';
import BasicData from "./BasicData/BasicData.js";

export default function Home() {
  return (
    <div className="home-container">
      <div className="left-column">
        {/* <Main/> */}
        <BasicData/>
      </div>
      <div className="right-column">
        <img className="logo" src={logo} alt="" />

        <div className="right-buttons-container">
          <a className="button-1">Home</a>
          <a className="button-1">Change Theme</a>
          <a className="button-1">Change Password</a>
          <a href="./signIn" className="button-1" >Log Out</a>
        </div>
      </div>
    </div>
  );
}
