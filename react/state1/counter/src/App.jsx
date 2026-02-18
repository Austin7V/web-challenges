import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function counterPlus() {
    setCount((prev) => prev + 1);
  }
  function counterMinus() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={counterMinus}>
          -
        </button>
        <button type="button" onClick={counterPlus}>
          +
        </button>
      </div>
    </div>
  );
}
