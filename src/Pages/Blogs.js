import React, { useState } from "react";

export default function Blogs() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decriment = () => {
    setCount((c) => c - 1);
  };

  return (
    <div style={{ paddingLeft: "50px" }}>
      <div>
        <h1>Blogs</h1>
      </div>
      <div>
        <p>{count}</p>
      </div>
      <div style={{ paddingTop: "5px" }}>
        <button onClick={increment}>+</button>
      </div>
      <div style={{ paddingTop: "5px" }}>
        <button onClick={decriment}>-</button>
      </div>
    </div>
  );
}
