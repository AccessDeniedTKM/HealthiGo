import React from "react";
import "./style.css"
function home() {
  return (
    <div className="bgimage">
  <div className="container">
      <h1 className="">User Dashboard</h1>
      <div className="row mt-5">
        <div className="card m-3 col-md-3" style={{ width: "16epm", height: "12rem"}}>
      <h2>Consult Doctor</h2>
      <h6 className="mt-3" style={{color:"gray"}}>Choose your doctor and get your treatment easily</h6>
      <a href="/doctors" className="btn btn-outline-success">Go to page</a>
    </div>

    <div className="card m-3 col-md-3" style={{ width: "16epm" }}>
      <h2>Lab test</h2>
      <h6 className="mt-3" style={{color:"gray"}}>Make your checkup fast as possible and prepare for a healthy lifestyle</h6>
      <a href="/labtest" className="btn btn-outline-success">Go to page</a>
    </div>


    <div className="card m-3 col-md-3" style={{ width: "16epm" }}>
      <h2>Order medicine</h2>
      <h6 className="mt-3" style={{color:"gray"}}>Get the medicines at your doorsteps within a couple of minutes</h6>
      <a href="/med" className="btn btn-outline-success">Go to page</a>
    </div>
    </div>

  <div className="row mt-5">
    <div className="card m-3 col-md-3" style={{ width: "16epm", height: "12rem" }}>
      <h2>Blood bank</h2>
      <h6 className="mt-3" style={{color:"gray"}}>Donate blood to your loved ones and be a part of our blood donation team</h6>
      <a href="/homebb" className="btn btn-outline-success">Go to page</a>
    </div>

    <div className="card m-3 col-md-3" style={{ width: "16epm" }}>
      <h2>Diet suggestion</h2>
      <h6 className="mt-3" style={{color:"gray"}}>Get your daily diet suggestions with heealthy routine to follow</h6>
      <a href="/diet" className="btn btn-outline-success">Go to page</a>
    </div>

    <div className="card m-3 col-md-3" style={{ width: "16epm" }}>
      <h2>Health status</h2>
      <h6 className="mt-3" style={{color:"gray"}}>Check your health status and keep your body healthy</h6>
      <a href="/user" className="btn btn-outline-success">Go to page</a>
    </div>
    </div>
  </div>
  </div>
  );
}

export default home;