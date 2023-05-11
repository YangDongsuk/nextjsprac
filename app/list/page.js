"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 1, 2]);

  return (
    <div>
      <h2>Products</h2>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <span>{count[i]}</span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]--;
                setCount(copy);
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
