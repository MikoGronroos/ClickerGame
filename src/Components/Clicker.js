import '../Stylesheets/Clicker.css';
import {getMoneyPerTap} from '../Modifiers.js';
import {addCurrency} from './Currency.js';


function Clicker() {

  function buttonClick(){
    addCurrency(getMoneyPerTap());
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