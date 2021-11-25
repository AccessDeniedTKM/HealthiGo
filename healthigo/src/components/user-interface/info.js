import React from 'react'

function info() {
    return (
        <div className="container mt-5 shadow p-3 ">
            <h1 className="mb-4">Edit Profile</h1>
            <form>
Blood group: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" /> <br /><br />
Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" /> <br /><br />
Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="radio" value="Male" /> Male 
<input type="radio" value="Female" /> Female <br /><br />
Medical Conditions: &nbsp;&nbsp;<select name="med">
<option value="diabetes"> Diabetes</option>
<option value="sugar"> Sugar</option>
<option value="anemia"> Anemia</option>
<option value="allergy"> Allergy</option>
<option value="kidney stone"> Kidney Stone</option>
</select><br /><br />
Emotional Health: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select name="emo">
<option value="stress"> Anxiety Disorder</option>
<option value="sleep"> Sleep issues</option>
<option value="anger"> Anger issues</option>
<option value="depression"> Depression</option>
<option value="Relationship"> Relationship issues</option>
</select><br /><br />
 City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" /><br /><br /><br />
<input type="submit" value="Submit" />
</form>
        </div>
    );
}

export default info
