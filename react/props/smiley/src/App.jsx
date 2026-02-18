function Smiley({ isHappy }) {
  let result;

  if (isHappy) {
    result = "😁";
  } else {
    result = "😭";
  }
  return <p> {result}</p>;
}

export default function App() {
  return (
    <h1>
      <Smiley isHappy={false} />
    </h1>
  );
}
