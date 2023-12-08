import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const changeCount = (value) => {
    //setCount(count + value);
    setCount((prev) => {
      if (prev === 10) {
        return 0;
      }
      return prev + value;
    });
  };
  //Conditional Rendering
  if (count > 10) {
    return <div>Counter Reached max value</div>;
  }
  if (count < 0) {
    return <div>Counter Reached min value</div>;
  }
  return (
    <div className="App">
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          changeCount(1);
        }}
      >
        ADD 1
      </button>
      <button
        onClick={() => {
          changeCount(-1);
        }}
      >
        Sub 1
      </button>
      <div> Counter is : {count % 2 === 0 ? "Even" : "Odd"}</div>
    </div>
  );
}

export default App;
