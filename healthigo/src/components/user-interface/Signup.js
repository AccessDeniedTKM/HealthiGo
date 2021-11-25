import React, { useState,useContext } from 'react';
//import { useHistory } from 'react-router-dom';

import './Signup.css';
const fs = require("fs");

export default function Signup() {

function enterDetails(email,password){
  let usersjson = fs.readFileSync("signup.json","utf-8");
  let users = JSON.parse(usersjson);
  let obj={
    email:"email",
    password:"password"
  }
  users.push(obj);
  usersjson = JSON.stringify(users);
  fs.writeFileSync("signup.json",usersjson,"utf-8");
  
}
  return (
    <div className="container col-md-5 mt-5">
      <form>
        <h1>Signup</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone number</label>
    <input type="number" className="form-control" id="exampleInputPhone" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <a type="submit" onClick={enterDetails}  className="btn btn-primary">Submit</a>
  <br />
  <a href="/login">Already have an account? Sign in</a>
</form>

    </div>
  );
}
