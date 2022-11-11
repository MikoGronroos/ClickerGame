import './Clicker.css';
import {getMoneyPerTap} from './Modifiers.js';
import { useState } from 'react';

function Clicker(props) {

  const [count, setState] = useState(0);

  return (
    <>
        <h1>Industrial Clicker</h1>
        <div id="container">
            <div id="center">
            <button id='button' onClick={() => setState(count + getMoneyPerTap())}>
                <h1 id='count'>{count}</h1>
            </button>
            </div>
        </div>
    </>
  );
}

export default Clicker;