import { useState, createContext } from 'react';
import './App.css';
import ComA from './components/ComA';
import ComB from './components/ComB';
import ComC from './components/ComC';
import Header from './components/Header';

const AppState = createContext();
function App() {
  const [data, setData] = useState("Web3Mantra");
  const [name, setName] = useState({ name: "Shahid", age: 23})
  return (
    <>
      <AppState.Provider value={{data, name}}>
          <Header/>
          <ComA/>
      </AppState.Provider>
   </>
  );
}

export default App;
export { AppState }
