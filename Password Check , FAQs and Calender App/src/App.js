import './App.css';
import { useState } from 'react';

function App() {
  const [length,setLength] = useState(8);
  const [includeNumber,setIncludeNumber] = useState(true);
  const [includeUpper,setIncludeUpper] = useState(true);
  const [includeLower,setIncludeLower] = useState(true);
  const [includeSymbol,setIncludeSymbol] = useState(true);
  const [password,setPassword] = useState("");

  const generatePassword = () => {
    let charset="";
    if(includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if(includeNumber) charset += "0123456789";
    if(includeSymbol) charset += "!@#$%^&*()-_=+";
    // console.log(charset);
    let generatePassword = "";
    for(let i=0;i<length;i++){
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatePassword += charset[randomIndex];
    }
    setPassword(generatePassword);
  };

  const copyToClipbord=()=>{
    navigator.clipboard.writeText(password);
    alert("Password Copied : "+password);
  };
  return (
    <div className="App">
      <div className='password-generator'>
        <h1>Strong Password Generator</h1>
        <div className='input-group'>
          <label htmlFor='num' className='number'>Password Length : </label>
          <input type='number' id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='upper' checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)}/>
          <label htmlFor='upper'> Include Uppercase</label>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='lower' checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)}/>
          <label htmlFor='lower'> Include Lowercase</label>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='number' checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)}/>
          <label htmlFor='number'> Include Numbers</label>
        </div>
        <div className='input-group'>
          <input type='checkbox' id='symbol' checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)}/>
          <label htmlFor='symbol'> Include Symbols</label>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
        <div className='generate-password'>
          <input type='text'className='txt' readOnly value={password}/>
          <button className='copy-btn' onClick={copyToClipbord}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
