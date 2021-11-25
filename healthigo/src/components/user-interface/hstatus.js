import React from 'react'

function hstatus() {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
        <th><a href="/healthprofile"><img border="2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLR7H9rOg5tj89SOeJRg4vQmVKYU8PoNi0kwPLEbXBBO9R3lCEQeJyIPuBx6ZEpnoeBE&usqp=CAU" /></a></th>
        <th><a href="/healthprofile"><img border="2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLR7H9rOg5tj89SOeJRg4vQmVKYU8PoNi0kwPLEbXBBO9R3lCEQeJyIPuBx6ZEpnoeBE&usqp=CAU" /></a></th>
        <th><a href="/healthprofile"><img border="2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLR7H9rOg5tj89SOeJRg4vQmVKYU8PoNi0kwPLEbXBBO9R3lCEQeJyIPuBx6ZEpnoeBE&usqp=CAU" /></a></th>
        <th><a href="/healthprofile"><img border="2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLR7H9rOg5tj89SOeJRg4vQmVKYU8PoNi0kwPLEbXBBO9R3lCEQeJyIPuBx6ZEpnoeBE&usqp=CAU" /></a></th>
        <th> 
        <img src="data:image/png;base64,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"/>
        </th>
</tr>
</thead>


<tr>
    <td style={{textAlign:"center"}}>Member1</td>
    <td style={{textAlign:"center"}}>Member2</td>
    <td style={{textAlign:"center"}}>Member3</td>
    <td style={{textAlign:"center"}}>Member4</td>


</tr>
    </table>
        </div>
    );
}

export default hstatus
