import { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const [input, setInput] = useState("");


  // const input = useRef(0);
  // const preState = useRef("");

  // useEffect(() => {
  //   counter.current = counter.current + 1;
  // })

  // useEffect(() => {
  //   preState.current = input;
  // }, [input])

  const inputField = useRef();

  const formHandle = (e) =>{
    setInput(e.target.value)
  }

  const clickHandler = () => {
    inputField.current.value = "Shahid";
  }
  return (
    <>
      
      <Header />
      {/* <input value={input} onChange={formHandle} /> */}
      {/* <h4>Application has been rendered {counter.current}</h4> */}
      {/* <h4>Previous state was { preState.current }</h4> */}

      <input ref={inputField} value={input} onChange={formHandle} />
      <button onClick={clickHandler}>Click Me</button>
   </>
  );
}

export default App;

