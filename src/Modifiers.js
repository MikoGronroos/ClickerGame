var moneyPerTap = 1.0;

function getMoneyPerTap(){
    return moneyPerTap;
}

function addToMoneyPerTap(amount){
    moneyPerTap += amount;
}

export {getMoneyPerTap, addToMoneyPerTap};