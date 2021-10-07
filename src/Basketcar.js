import React from "react";
import "./Basketcar.css";
import { useStateValue } from "./StateProvider";

function Basketcar({ model, image, price, city, type, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      model: model,
    });
  };

  return (
    <div className="basketcar">
      <img className="basketcar_image" src={image} />

      <div className="basketcar_info">
        <p className="basketcar_title">{model}</p>
        <p className="basketcar_price">
          <a>$</a>
          <strong>{price}</strong>
          <br></br>
          <strong>{city}</strong>
          <br></br>
          <strong>{type}</strong>
        </p>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default Basketcar;
