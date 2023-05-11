"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>Products</h2>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
