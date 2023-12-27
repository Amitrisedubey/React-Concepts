import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import { UseRefUse } from "./Components/useRef";
import { Forms } from "./Components/form";

function App() {
  return (
    <div className="App">
      {/* <UseRefUse /> */}
      <Forms />
    </div>
  );
}

export default App;
/**
 * 1.Variable, saves its own state
 * 2.change in variable, shouldn't cause a rerender
 *  let test = 1;
  const [dummy, setDummy] = useState(1);
  console.log(test);
  return (
    <div className="App">
      <button
        onClick={() => {
          test += 1;
          console.log(test);
        }}
      >
        Increment Test
      </button>
      <button
        onClick={() => {
          setDummy((p) => p + 1);
        }}
      >
        Re-Render
      </button>

      2 points work here
      function App() {
  const test = useRef(1);
  const [dummy, setDummy] = useState(1);
  console.log("ReRendered", test);
  return (
    <div className="App">
      <button
        onClick={() => {
          test.current = test.current + 1;
          console.log(test);
        }}
      >
        Increment Test
      </button>
      <button
        onClick={() => {
          setDummy((p) => p + 1);
        }}
      >
        Re-Render
      </button>
    </div>
  );
}
 */
