import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Welcome to React!</h2>
      <label htmlFor="react-input">React Input</label>
      <input id="react-input" type="text" />
      <a className="article__link" href="https://react.dev/">
        Learn more about React
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
