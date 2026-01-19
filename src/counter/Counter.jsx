import React, { useState } from "react";

export const Counter = ({ defaultValue }) => {
  const [count, setCount] = useState(defaultValue);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <button className="decrement" onClick={handleDecrement}>
        Decrement
      </button>
      <span>{count}</span>
      <button className="increment" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};
