import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const[count, setCount] = useState(0)

  return (
    <>
      <h1>Name of the game</h1>
      <div id="container">
        <div id="center">
          <button onClick={() => setCount(count + 1)}>Centered Button</button>
          <h1>{count}</h1>
        </div>
      </div>
    </>
  );


}

export default App;
