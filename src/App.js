import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(1);
  const [isMorning, setMorning] = useState(false);
  const [temp, setTemp] = useState(22);

  return (
    <div className= {`box ${isMorning ? 'dayLight': ''}`}>
      <h2>The count is {count} </h2>
      <br />  
      <button onClick= {
        ()=> setCount (count + 1)
      }>
        Update count
      </button>
    <h1> Good {isMorning ? 'Morning' : 'Night'}</h1>
    <br />
    <button onClick = {
      () => setMorning(!isMorning)
    }>
      Change Day
    </button>
    <h3> The room temperature is {temp} °C</h3>
    <br />
    <button onClick = {
      ()=> setTemp(temp + 1)
    }>
      Increase temperature
    </button>
    <button onClick = {
      ()=> setTemp(temp - 1)
    }>
      Decrease temperature
    </button>
      </div>
  );
}

export default App;
