import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import { Link } from "react-router-dom";

import User from "./components/user-interface/user";
import Home from "./components/user-interface/home";
import Signup from "./components/user-interface/Signup";
import Login from "./components/user-interface/Login";

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


        </Routes>
      </Router>
    </div>
  );
}

export default App;