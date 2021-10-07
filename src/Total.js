import React from 'react';
import "./Total.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";


function Total() {
   
    const[{user, basket}, dispatch] = useStateValue();
    
    const paymentAlert = ()=> {
        if (user) {
            alert("Please pay to this account. \n IBAN: TR12 0006 7010 0000 0051 0504 00");
          }
        else {
          alert("You must sign in first!");
        }
      }

    return (
        
        <div className="total">
            <p>
                Total: {basket.length} car: 
                <strong> $ </strong>
                <strong>{getBasketTotal(basket)}</strong>
                
            </p>
        
        <button onClick={paymentAlert} className="button_total">
            Rent
        </button>

        </div>
    )
}

export default Total
