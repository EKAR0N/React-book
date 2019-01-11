import React from "react";
import "./Counter.css";

const Counter = ({ value, color, onIncrement, onDecrement }) => (
  <div className="Counter">
    <h1 style={{ color }}>{value}</h1>
    <button type="button" onClick={onIncrement}>+</button>
    <button type="button" onClick={onDecrement}>-</button>
  </div>
  );

export default Counter;
