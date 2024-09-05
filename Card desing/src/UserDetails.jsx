import React, { useState } from 'react'

const UserDetails = () => {
    // const [userName,setUserName]=useState("Thibash");
    // const [userAge,setUserAge]=useState(22);
    const [user,setUser] = useState({name:"Thibash", age:22});
    const [num,setNum]=useState({count:0,status:true});
    // const updateUserName = () =>{
        // alert("hello")
        // setUserName("kamali")
        // userName=="Thibash" ? setUserName("Kamali"): setUserName("Thibash");
        // setUser({...user,name:"Kamali"});
    // };
    // const updateUserAge = () => {
        // setUserAge(24);
        // userAge==22 ? setUserAge(24) : setUserAge(22)
        // setUser({...user,age:24})
    // };
    const changeNum=(get)=>{
        if(get==="in"){
            setNum({count:num.count+1,status:num.status});
        }
        else if(get==="de"){
            setNum({count:num.count-1,status:num.status});
        }
        else{
            setNum({count:num.count=0,status:num.status});
        }
    }
    const changetxt=()=>{
        setNum({count:num.count,status:!num.status})
    }
    function changeHandler(e){
        setUser({...user,[e.target.name]: e.target.value})
    }
  return (
    <div>
      <h1>User Details</h1>
      {/* <h3>{userName}</h3>
      <h3>{userAge}</h3> */}
      {/* <h3>{user.name}</h3>
      <h3>{user.age}</h3> */}
      {/* <button onClick={updateUserName}>Update User Name</button>
      <button onClick={updateUserAge}>Update User Age</button> */}
      <h1>{num.count}</h1>
      <button onClick={()=>changeNum("in")}>Increase</button>
      <button onClick={()=>changeNum("de")}>Decrease</button>
      <button onClick={()=>changeNum("re")}>Reset</button>
      <h1>{num.status ? "Front End":"Back End"}</h1>
      <button onClick={()=>changetxt()}>ChaneText</button>

       <h2>{user.name},{user.age}</h2> 
      <input type="text" placeholder='Enter your name' onChange={changeHandler} value={user.name} name='name'/>
      <input type="text" placeholder='Enter your Age' onChange={changeHandler} value={user.age} name='age'/>
    </div>
  )
}

export default UserDetails;
