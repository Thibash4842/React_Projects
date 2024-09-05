import React, { useState } from 'react'
import './RegForm.css';

const RegForm = () => {
    const [user, setUser] = useState({
        name: "Thibash",
        age: 25,
        gender: "Male",
        isMarried: true,
        country:"India",
        bio:"write something about your self"
    });
    
    function changeHandler(e){
        const name =e.target.name;
        // console.log(name);
        const value =e.target.type==="checkbox"?e.target.checked : e.target.value;
        setUser({...user,[name]:value})
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <th>Marital Status</th>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{user.country}</td>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <td>{user.bio}</td>
                    </tr>
                    
                </tbody>
            </table>
            <form>
                <input type="text" placeholder='Full Name' value={user.name} onChange={changeHandler} name="name"/>
                <input type="number" placeholder='Age' value={user.age} onChange={changeHandler} name="age"/>
                <aside className='gender'>
                    <label htmlFor="male">
                        <input type="radio" name='gender' id='male' checked={user.gender === "Male"} value="Male" onChange={changeHandler} />
                        &nbsp; Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" name='gender' id='female' checked={user.gender === "Female"} value="Female" onChange={changeHandler} />
                        &nbsp; Female
                    </label>
                </aside>
                <label htmlFor="isMarried">
                    <input type="checkbox" id='isMarried' checked={user.isMarried} onChange={changeHandler} name='isMarried'/>
                    &nbsp; Is Married
                </label>
                <figcaption>
                    <label htmlFor="country">Select Country:</label>
                    <select name="country" id="country" value={user.country} onChange={changeHandler}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </figcaption>
                <textarea name="bio" id="bio" rows={3} placeholder='write about you' value={user.bio} onChange={changeHandler}></textarea>
            </form>
        </div>
    )
}

export default RegForm
