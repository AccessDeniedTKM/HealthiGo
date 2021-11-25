import React from 'react'

function homebb() {
    return (
      
        <div className="bgimage">
            <header className="w3-container w3-blue float-left" style={{paddingLeft:"300px"}} >
              
      <h1>Blood donations and receiving</h1>
    </header>
    <div  style={{paddingTop:"60px", paddingLeft:"500px"}}>
        <div className="row">
         <div className="col-md-5" >
            <div className="card bb ">
          
<div className="bg-image hover-overlay ripple"  data-mdb-ripple-color="light">
  <a href="/donation">  
     <img
      src="https://media.istockphoto.com/vectors/donate-blood-concept-with-blood-bag-and-heart-blood-donation-vector-vector-id1033906526"
      className="img-fluid img" style={{width:"400px",height:"200px"}} 
    /></a>
    <a href="#!">
      <div className="mask" style={{color:"green"} }></div>
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Donation</h5>
    
  
  </div>
</div>
</div>
</div>
<div className="col-md-5">
<div style={{paddingLeft:"180px"}}>
<div className="card bb" >
<div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light" >
 <a href="/receive">
      <img
      src="https://www.awarenessdays.com/wp-content/uploads/2018/07/iStock-693244582.jpg"
      className="img-fluid img" style={{width:"400px",height:"200px"}} 
    /></a>
    <a href="#!">
      <div className="mask" style={{color:"green"} }></div>
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Receive</h5>
   
   
    
  </div>
  </div>
  </div>
</div>
</div>

        </div>
    );
}

export default homebb
