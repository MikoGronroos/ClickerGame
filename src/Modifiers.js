var moneyPerTap = 1;

function getMoneyPerTap(){
    return moneyPerTap;
}

function addToMoneyPerTap(amount){
    moneyPerTap += amount;
}

export {getMoneyPerTap, addToMoneyPerTap};