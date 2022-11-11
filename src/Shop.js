import './Shop.css';
import {addToMoneyPerTap} from './Modifiers.js';

function Shop(props) {

  const data = [{
    "Name": "Worker",
    "Cost": 15,
    "MoneyPerSecond": 1,
    "MoneyPerTap": 0
  },
  {
    "Name": "Manager productivity",
    "Cost": 10,
    "MoneyPerSecond": 0,
    "MoneyPerTap": 1
  }];

  let itemList=data.map((singleData , index)=>{
    return <button className='ShopButton' onClick={() => {
      addToMoneyPerTap(singleData.MoneyPerTap);
    }
      } key={index}>
      {singleData.Name}
      {singleData.Cost + "$"}
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