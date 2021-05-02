import React from "react";
import moment from "moment";
import "./Order.css";
import BasketItem from "./BasketItem";
import { getBasketTotal } from "./reducer";
import NumberFormat from "react-number-format";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <BasketItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <NumberFormat
        className="order__total"
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Order Total: $"}
        decimalScale={2}
      />
    </div>
  );
}

export default Order;
