import React, { useEffect, useState } from 'react';
import './Advice.css';
// https://api.adviceslip.com/advice
const Advice = () => {
    const [advice,setAdvice]=useState("To hope your goal after get your achivement");
    const [count,setCount]=useState(0);
    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount(count+1);
    }
    useEffect(function(){
        setAdvice();
    },[]);
  return (
    <div className='advice-container'>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Counetr count={count}/>
    </div>
  )
}
function Counetr(props) {
    return(
        <p>Your have read <b>{props.count}</b> pieces of advice</p>
    )
}
export default Advice;

