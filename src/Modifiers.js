var moneyPerTap = 1.0;
var moneyPerSecond = 0.0;

function getMoneyPerTap(){
    return moneyPerTap;
}

function getMoneyPerSecond(){
    return moneyPerSecond;
}

function addToMoneyPerTap(amount){
    moneyPerTap += amount;
}

function addToMoneyPerSecond(amount){
    moneyPerSecond += amount;
}

export {getMoneyPerTap, addToMoneyPerTap, getMoneyPerSecond, addToMoneyPerSecond};