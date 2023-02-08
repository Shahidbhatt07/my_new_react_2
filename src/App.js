import React, {useState, useEffect, useMemo} from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 100000000; i++) { }
    return num;
  };

  const calculation = useMemo(() =>
  expensiveCalculation(count)
  , [count]) 

  return (
    <>
      <Header />
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <h1>Count: {count}</h1>
      
      <input onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1>
    </>
  );
}

export default App;

