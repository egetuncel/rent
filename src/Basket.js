import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Basket.css";
import Total from "./Total";
import Basketcar from "./Basketcar"

import { useStateValue } from "./StateProvider";

function Basket() {
    
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="basket">
            <Header></Header>
            <div className="basket_container">
                <div className="basket_top">
                    
                    {basket.map(item=>(
                         <Basketcar
                             model={item.model}
                             image={item.image}
                             price={item.price}
                             city={item.city}
                             type={item.type}
                             
                         />
                    ))}
                   
                </div>
                <div className="basket_bot">
                    <Total></Total>
                </div>
            </div>
            
           
        </div>
    )
}

export default Basket;
