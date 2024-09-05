import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCouunt] = useState(0);
    const [times,setTimes] = useState(0);

// no dependency
    // useEffect(()=>{
    //     console.log("i am thibash")
    // })

    // empty dependency
    // useEffect(()=>{
    //     console.log("i am developer");
    // },[])

    // dependency
    useEffect(()=>{
        console.log("i am developer");
    },[count,times])
  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Times : {times}</h1>

      <button onClick={()=>setCouunt((value)=>value+1)}>Increament</button>
      <button onClick={()=>setCouunt((value)=>value-1)}>Decreament</button>
      <button onClick={()=>setTimes((value)=>value+1)}>Times</button>
    </div>
  )
}

export default Effect
