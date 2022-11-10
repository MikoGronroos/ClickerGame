import './Clicker.css';
import React, { useState } from 'react';

function Clicker() {
  const[count, setCount] = useState(0)
  return (
    <>
        <h1>Industrial Clicker</h1>
        <div id="container">
            <div id="center">
            <button id='button' onClick={() => setCount(count + 1)}>

                <h1 id='count'>{count}</h1>
            </button>
            </div>
        </div>
    </>
  );
}

export default Clicker;