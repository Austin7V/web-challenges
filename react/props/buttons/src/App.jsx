function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        color: color,
        height: "100px",
        fontSize: "24px",
      }}
    >
      {text}
    </button>
  );
}

export default function App() {
  function handleClick() {
    console.log("click, click,");
  }

  return (
    <h1>
      <Button
        color="red"
        disabled={false}
        text={"Click"}
        onClick={handleClick}
      />
    </h1>
  );
}
