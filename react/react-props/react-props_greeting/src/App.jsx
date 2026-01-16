import Greeting from "./Component/Greeting.jsx";

export default function App() {
  return (
    <h1>
      <Greeting name="Klaus" age={32} isStudent={false} />
    </h1>
  );
}
