import './App.css';
import Shop from './Shop';
import React, { useState } from 'react';
import Clicker from './Clicker';

function App() {

  const[count, setCount] = useState(0)
  return (
    <>
      <Clicker/>
      <Shop/>
    </>
  );
}

export default App;
