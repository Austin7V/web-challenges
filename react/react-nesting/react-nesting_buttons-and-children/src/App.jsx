import Button from "./Component/Button.jsx";
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
