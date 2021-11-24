import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import { Link } from "react-router-dom";

import User from "./components/user-interface/user";
import Home from "./components/user-interface/home";
import Signup from "./components/user-interface/Signup";
import Login from "./components/user-interface/Login";
import Doctorname from "./components/user-interface/doctorname";
import Docdetails from "./components/user-interface/docdetails";
import Diet from "./components/user-interface/diet";
import Labtest from "./components/user-interface/labtest";
import Homebb from "./components/user-interface/homebb";
import Donation from "./components/user-interface/donation";
import Receive from "./components/user-interface/receive";
import Apositive from "./components/user-interface/apositive";







// import { Router } from "express";

//import { AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Router>
        <Routes>
          <Route path="/user" element={<User />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/doctors" element={<Doctorname />}></Route>
          <Route path="/docdetails" element={<Docdetails />}></Route>
          <Route path="/diet" element={<Diet />}></Route>
          <Route path="/labtest" element={<Labtest />}></Route>
          <Route path="/homebb" element={<Homebb />}></Route>
          <Route path="/donation" element={<Donation />}></Route>
          <Route path="/receive" element={<Receive />}></Route>
          <Route path="/apositive" element={<Apositive />}></Route>






        </Routes>
      </Router>
    </div>
  );
}

export default App;