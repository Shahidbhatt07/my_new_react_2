import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import useFetch from './components/useFetch';

function App() {
  const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
  
  return (
    <>
      <Header />
      {data.map((e, i) => {
        return <h1 key={i}>{e.firstName}</h1>
      })
      }
    </>
  );
}

export default App;

