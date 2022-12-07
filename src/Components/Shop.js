import '../Stylesheets/Shop.css';
import {addToMoneyPerTap, addToMoneyPerSecond} from '../Modifiers.js';
import {addCurrency, hasEnoughCurrency} from './Currency.js';

function getItemPrice(base, percentageRaised){
  return base * (1 + percentageRaised);
}

function Shop() {

const data = [{
  "Name": "Worker",
  "Cost": 15,
  "MoneyPerSecond": 1,
  "MoneyPerTap": 0,
  "PricePercentageIncrease" : 0.005,
  "PercentageRaised": 0
},
{
  "Name": "Manager productivity",
  "Cost": 10,
  "MoneyPerSecond": 0,
  "MoneyPerTap": 0.01,
  "PricePercentageIncrease" : 0.005,
  "PercentageRaised": 0
}];

let itemList=data.map((singleData , index)=>{
  return <button className='ShopButton' onClick={() => {

    if(hasEnoughCurrency(getItemPrice(singleData.Cost, singleData.PercentageRaised))){
      addCurrency(-getItemPrice(singleData.Cost, singleData.PercentageRaised));
      addToMoneyPerTap(singleData.MoneyPerTap);
      addToMoneyPerSecond(singleData.MoneyPerSecond);
      singleData.PercentageRaised += singleData.PricePercentageIncrease;
      document.getElementById(index).innerHTML = +getItemPrice(singleData.Cost, singleData.PercentageRaised).toFixed(3) + "$";
    }
  }
    } key={index}>
    <p>{singleData.Name}</p>
    <p id={index}>{getItemPrice(singleData.Cost, singleData.PercentageRaised) + "$"}</p>
  </button>
})

  return (
    <>
    <div id='Shop'>
      {itemList}
    </div>
    </>
  );
}

export default Shop;