import React from 'react'

export default function receive() {
    return (
        
        <div >
             <header className="w3-container w3-blue"  style={{paddingLeft:"500px"}} >
      <h1>Blood Groups</h1>
    </header>
        <div className="button1 mt-5" style={{paddingLeft:"550px"}} >
        <a href="/apositive"> <button type="button" class="btn btn-primary" padding="500px" style={{width:"50px"}}>A+</button></a>
        </div>
        <div className="button2 mt-5" style={{paddingLeft:"550px"}}>
        <button type="button" class="btn btn-primary" style={{width:"50px"}}>A-</button>
        </div>
        <div className="button3 mt-5" style={{paddingLeft:"550px"}}>
        <button type="button" class="btn btn-primary" style={{width:"50px"}}>B+</button>

        </div>
        <div className="button4 mt-5 " style={{paddingLeft:"550px"}}>
            <button type="button" class="btn btn-primary" style={{width:"50px"}}>B-</button>
        </div>
        <div className="button4 mt-5 " style={{paddingLeft:"550px"}}>
            <button type="button" class="btn btn-primary" style={{width:"50px"}}>O+</button>
        </div>
        <div className="button4 mt-5 " style={{paddingLeft:"550px"}}>
            <button type="button" class="btn btn-primary" style={{width:"50px"}}>O-</button>
        </div>
        <div className="button4 mt-5 " style={{paddingLeft:"550px"}}>
            <button type="button" class="btn btn-primary" style={{width:"50px"}}>AB+</button>
        </div>
        <div className="button4 mt-5 " style={{paddingLeft:"550px"}}>
            <button type="button" class="btn btn-primary" style={{width:"50px"}}>AB-</button>
        </div>
        </div>
    )
}