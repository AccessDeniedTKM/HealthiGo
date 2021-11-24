import React from 'react'
import docto from './docto.json'

function doctorname() {
  
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Qualification</th>
      <th scope="col">Booking</th>
    </tr>
  </thead>
  <tbody>
    {docto.map((data)=>{
      return(
      <tr>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.qualification}</td>
      <td><a className="btn btn-success" href="/docdetails">Details</a></td>
    </tr>
      )
    })
  }
    
  
  </tbody>
</table>
        </div>
    )
}

export default doctorname
