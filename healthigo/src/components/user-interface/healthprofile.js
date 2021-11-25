import React from 'react'

function healthprofile() {
    return (
        <div className="container p-3">
            <table style={{textAlign:"center"}}>
       <tr>
         <th rowspan="4">     <img border="2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLR7H9rOg5tj89SOeJRg4vQmVKYU8PoNi0kwPLEbXBBO9R3lCEQeJyIPuBx6ZEpnoeBE&usqp=CAU" /></th>
         <th>
            <h2>Name:Member1</h2>
      <h4>  Contact Number:xxxxxxxxx9 <br />
Blood Group:X</h4>
</th></tr>
 </table>
 <table><tr> <th>
   <h3><a href="/info">  Basic Info</a></h3>
 </th></tr>
    <tr>
       <td>
          <h3> Medicines You Take:</h3>
           Pantodac,insulin<br />
           <h3>Lab Tests Taken:</h3>
           Blood Test
          <h3> Doctor Appointments:</h3>
           25/12/2020-Dr.George Mathew<br />
           21/04/2021-Dr.George Mathew
       </td>

    </tr>
    <tr>
        <td><h3>Notifications</h3>
            Blood Related<br />
            Health Related
        </td>
    </tr>
 </table>
        </div>
    );
}

export default healthprofile
