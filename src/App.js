import './App.css';
import SignIn from './Components/SignIn/SignIn.js'
import Home from './Components/Home/Home.js'
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    // <Routes>
      // <Route path="/" element={<SignIn/>}/>
    //   {/* <SignIn/> */}
    //   {/* <Home/> */}
    // </Routes>
    <>
      <SignIn/>
    </>
  );
}

export default App;
