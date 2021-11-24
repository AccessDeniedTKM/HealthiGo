import React from "react";
function home() {
  return (
  <div className="container">
      <h1 className="mt-5">User Dashboard</h1>
      <div className="row mt-5">
        <div className="card col-md-4" style={{ width: "16epm" }}>
      <h2>Consult Doctor</h2>
      <a href="/doctors" className="btn btn-success">Go to page</a>
    </div>

    <div className="card col-md-4" style={{ width: "16epm" }}>
      <h2>Lab test</h2>
      <a href="/user" className="btn btn-success">Go to page</a>
    </div>


    <div className="card col-md-4" style={{ width: "16epm" }}>
      <h2>Order medicine</h2>
      <a href="/user" className="btn btn-success">Go to page</a>
    </div>
    </div>

  <div className="row mt-5">
    <div className="card col-md-4" style={{ width: "16epm" }}>
      <h2>Blood bank</h2>
      <a href="/user" className="btn btn-success">Go to page</a>
    </div>

    <div className="card col-md-4" style={{ width: "16epm" }}>
      <h2>Diet suggestion</h2>
      <a href="/user" className="btn btn-success">Go to page</a>
    </div>

    <div className="card col-md-4" style={{ width: "16epm" }}>
      <h2>Health status</h2>
      <a href="/user" className="btn btn-success">Go to page</a>
    </div>
    </div>
  </div>
  );
}

export default home;