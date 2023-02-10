import './App.css';
import React, {useState, useCallback} from 'react';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  
  const increment = () => {
    setCount((c)=>c+1)
  }

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"])
  }, [todos]);
  

  return (
    <>
      <Header />
      <div>
        count: {count}
        <button onClick={increment}>+</button>
      </div>

      <hr />

      <Todos todos ={todos} addTodo={addTodo} />
    </>
  );
}

export default App;

