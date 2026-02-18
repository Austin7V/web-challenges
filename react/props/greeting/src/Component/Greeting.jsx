function Greeting(props) {
  return (
    <div>
      <h1>Hello, Coach!</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Greeting;
