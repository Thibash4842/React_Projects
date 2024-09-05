import './App.css';
import questionData from './question.json';
import { useEffect, useState } from 'react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20);

  useEffect(()=>{
    let interval;
    if(timer > 0 && !showScore) {
      interval=setInterval(()=>{setTimer((prevTimer)=>prevTimer -1 )},1000)
    } else {
      clearInterval(interval);
      setShowScore(true);      
    }
    return ()=>clearInterval(interval);
  },[timer,showScore])

  const handleAnswer=(selectedOption)=>{
    if(selectedOption === questionData[currentQuestion].correctOption){
      setScore((prevScore)=>prevScore + 1);
    }
    if(currentQuestion < questionData.length - 1){
      setCurrentQuestion((prevQuestion)=>prevQuestion + 1);
      setTimer(20);
    }else{
      setShowScore(true);
    }
    
  }
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(20);
  }
  return (
    <div className="App">
      {showScore ? (
        <section className='score-section'>
          <h2>Your Score : {score}/{questionData.length}</h2>
          <button onClick={handleRestart}>Restart</button>
        </section>
      ) : (
        <section className='question-section'>
          <h2>Question {currentQuestion+1}</h2>
          <p>{questionData[currentQuestion].question}</p>
          <aside className='options'>
            {questionData[currentQuestion].options.map((option,index)=>(<button key={index} onClick={()=>handleAnswer(option)}>{option}</button>))}
          </aside>
          <figure className='timer'>Time Left : <span>{timer}s</span></figure>
        </section>
      )}
    </div>
  );
}

export default App;
