import React from 'react';
import './Login.css';

function Login() {

  return (
    <div className="container col-md-5 mt-5">
    <form>
      <h1>Login</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <a type="submit" href="/home" className="btn btn-primary">Submit</a>
  <br />
  <a href="/signup">Dont have an account? Signup</a>
</form>
</div>
  );
}

export default Login;
