import { useState } from "react";

function Currency(amount){
    const[count, setState] = useState(0);

    setState(count + amount);

}