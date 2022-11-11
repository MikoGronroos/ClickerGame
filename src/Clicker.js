import './Clicker.css';
import {getMoneyPerTap} from './Modifiers.js';
import {setCurrencyAmount} from './Currency.js';


function Clicker() {

  function buttonClick(){
    setCurrencyAmount(getMoneyPerTap());
  }

  return (
    <>
        <div id="container">
            <div id="center">
              <button id='button' onClick={() => buttonClick()}>
                  <h1 id='count'>0$</h1>
              </button>
            </div>
        </div>
    </>
  );
}

export default Clicker;