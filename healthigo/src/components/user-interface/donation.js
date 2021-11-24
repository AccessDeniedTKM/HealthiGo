import React from 'react'

export default function donation() {
    return (
        <div>
         
<header className="w3-container w3-blue float-left" style={{paddingLeft:"300px"}} >
              
      <h1>Donations</h1>
    </header>            <div className="form-outline ml-4 mt-4" style={{width:"200px"}} >
  <input type="text" id="typeText" className="form-control" placeholder="Name"/>
  <label className="form-label" for="typeText"></label>
</div>
<div className="form-outline ml-4 mt-4" style={{width:"200px"}} >
  <input type="text" id="typeText" className="form-control" placeholder="Phone no."/>
  <label className="form-label" for="typeText"></label>
</div>
<div className="form-outline ml-4 mt-4" style={{width:"200px"}} >
  <input type="text" id="typeText" className="form-control" placeholder="Blood Group"/>
  <label className="form-label" for="typeText"></label>
</div>
<div className="form-outline ml-4 mt-4" style={{width:"200px"}} >
  <input type="text" id="typeText" className="form-control" placeholder="Address"/>
  <label className="form-label" for="typeText"></label>
</div>
<div className="form-outline ml-4 mt-4" style={{width:"200px"}} >
  <input type="text" id="typeText" className="form-control" placeholder="Pin code"/>
  <label className="form-label" for="typeText"></label>
</div>
<div className="location ml-4 mt-4" >
<select name="location" id="location" style={{width:"200px" ,height:"35px"}}>
  <option value="Kerala">Kerala</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Rajasthan">Rajasthan</option>
</select>
</div>
 </div>
    )
}