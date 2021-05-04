import React from "react";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => {
            return (
              <BasketItem
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
