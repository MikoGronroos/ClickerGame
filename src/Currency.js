let currencyAmount = 0.0;

function getCurrency(){
    return currencyAmount;
}

function setCurrencyAmount(amount){
    currencyAmount += amount;
    document.getElementById('count').innerHTML = +getCurrency().toFixed(3);
}

function hasEnoughCurrency(amount){
    return amount <= currencyAmount;
}

export {getCurrency, setCurrencyAmount, hasEnoughCurrency};