import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [amount,setAmount] = useState(1);
  const [fromCurrency,setFromCurrency] = useState("USD");
  const [toCurrency,setToCurrency] = useState("INR");
  const [convertedAmount,setConvertedAmount] = useState(null);
  const [exchangeRate,setExchangeRate] = useState(null);

  useEffect(()=>{
    const getExchangeRate=async()=>{
      try{
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        // console.log(response);
        setExchangeRate(response.data.rates[toCurrency]);
      }catch(error){
        console.log("Error fetching exchange rate : ",error);
      }
    }
    getExchangeRate();
  },[fromCurrency,toCurrency]);

  useEffect(()=>{
    if(exchangeRate !== null){
      setConvertedAmount((amount * exchangeRate).toFixed(2))
    }
  },[amount,exchangeRate])

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  }

  const handleFromCurrencyChange =(e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };
  return (
    <div className="App">
      <main className='container'>
        <div className='box-image'></div>
        <div className='data'>
          <h1>CURRENCY CONVERTER</h1>
          <div className='input-container'>
            <label htmlFor='amount'>Amount :</label>
            <input type='number' id='amount'  value={amount} onChange={handleAmountChange}/>
          </div>
          <div className='input-container'>
            <label htmlFor='from-curreny'>From Curreny :</label>
            <select id='from-curreny'  value={fromCurrency} onChange={handleFromCurrencyChange}>
              <option value="USD">USD - United State Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterlings</option>
              <option value="JPY">JPY - Japanes Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">South African Rand</option>
            </select>
          </div>
          <div className='input-container'>
            <label htmlFor='to-uurency'>To Cuurency :</label>
            <select id='to-curreny' value={toCurrency} onChange={handleToCurrencyChange}>
              <option value="USD">USD - United State Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterlings</option>
              <option value="JPY">JPY - Japanes Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">South African Rand</option>
            </select>
          </div>
          <div className='result'>
            <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
          </div>
        </div>
      </main>


    </div>
  );
}

export default App;
