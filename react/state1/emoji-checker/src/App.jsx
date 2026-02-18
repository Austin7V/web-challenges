import "./styles.css";
import { useState } from "react";

export default function App() {
  const validCode = "🐡🐠🐋";

  const [fishes, setFishes] = useState("");

  function handleClick(emoji) {
    setFishes((prev) => prev + emoji);
  }
  function handleReset() {
    setFishes("");
  }

  return (
    <div className="container">
      <p>{fishes}</p>
      <div className="button-container">
        <button type="button" onClick={() => handleClick("🐡")}>
          🐡
        </button>
        <button type="button" onClick={() => handleClick("🐋")}>
          🐋
        </button>
        <button type="button" onClick={() => handleClick("🐠")}>
          🐠
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {fishes === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
