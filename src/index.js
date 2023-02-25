import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter,
} from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn.js";
import FirstTimeLogin from './Components/FirstTimeLogin/FirstTimeLogin.js';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword.js';
import Home from './Components/Home/Home.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <div>Erroooooor</div>,
  },
  {
    path: "/signIn",
    element: <SignIn/>,
    errorElement: <div>Erroooooor</div>,
  },
  {
    path: "/firstTime",
    element: <FirstTimeLogin/>,
    errorElement: <div>Erroooooor</div>,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword/>,
    errorElement: <div>Erroooooor</div>,
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <div>Erroooooor</div>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter> */}
      {/* <App /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
