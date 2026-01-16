import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Save</Button>
      <Button>Delete</Button>
      <Button>Edit</Button>
      <Button>Cancel</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
