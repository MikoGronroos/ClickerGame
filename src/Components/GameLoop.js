import {getMoneyPerSecond} from '../Modifiers.js'
import {addCurrency} from './Currency.js';

let secondsPassed = 0;
let oldTimeStamp = 0;
let timePassed = 0;

function GameLoop(timeStamp){

    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    timePassed += secondsPassed;
    if(timePassed >= 1){
        addCurrency(getMoneyPerSecond());
        timePassed = 0;
    }

    window.requestAnimationFrame(GameLoop);
}

function StartGameLoop(){
    window.requestAnimationFrame(GameLoop);
}

export default StartGameLoop;