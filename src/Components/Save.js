import Cookies from "universal-cookie";
import { getCurrency, setCurrencyAmount } from "./Currency";

const cookies = new Cookies();

function SaveCookies(){
    let amount =  getCurrency();
    cookies.set('money', amount);
}

function LoadCookies(){

    let moneyAmount = cookies.get('money');
    setCurrencyAmount(Number(moneyAmount));
}

export {SaveCookies, LoadCookies};