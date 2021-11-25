import React from 'react'

function docdetails() {
    return (
            <div style={{paddingLeft:"300px"}}> 
         <div className="card ml-5 m-5 float-left"  style={{width:"500px",height:"500px"}}>
  <div className="card-body " >
   
    <header className="w3-container w3-blue" >
      <h1>Doctor Details</h1>
    </header>
    <pre className="card-text">
      <p>Name: Dr. Aishwarya</p>
      <p>Qualification: Gynecology</p>
      <p>Timing: 2:00pm-5:00pm</p>
      <p>Contact No.:0091 8765432988</p>
      <p>Hospital: ABC Hospital</p>
      <p>Address: MG street,India</p>
    </pre>
    <button type="button" className="btn btn-primary">Book</button>
    <a className="btn btn-primary right mt-1 ml-5" href="/home">Go to dashboard</a>
  </div>
</div>
        </div>
    )
}

export default docdetails
