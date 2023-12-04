import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/todo";

function App() {
  const arr = ["Wake up Bhai", "Have Tea"];
  return (
    <div className="App">
      {arr.map((e) => (
        <Todos num={e} />
      ))}
    </div>
  );
}

export default App;
