import React,{ useState } from 'react'
import medic from './medicine.json'
const fs = require('fs');

function Med() {
    const [need,setNeed] = useState('')
    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Available quantity</th>
      <th scope="col">Amount</th>
      <th scope="col">Required quantity</th>
      <th scope="col">Order</th>
    </tr>
  </thead>
  <tbody>
    {medic.map((data)=>{
      return(
      <tr>
      <th scope="row">{data.name}</th>
      <td>{data.quantity}</td>
      <td>{data.amount}</td>
      <td><input id="" type="text" name="need" value={need}
            onChange={(e)=>setNeed(e.target.value)}/></td>
      <td><a className="btn btn-success" href="">Order</a></td>
    </tr>
      )
    })
  }
    
  
  </tbody>
</table>
        </div>
    )
}

export default Med
