import logo from "./logo.svg";
import "./App.css";

function App() {
  const array = ["Android", "Blackberry", "I-Phone", "Windows phone"];

  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <div className="dii">
        {array.map((e) => (
          <li>{e}</li>
        ))}
      </div>
      <h1>Mobile Manufacturers</h1>
      <div className="dii">
        <Manufacturers />
      </div>
    </div>
  );
}
const array2 = ["Samsung", "HTC", "Apple", "Xiaomi"];
const Manufacturers = () => {
  return array2.map((e) => <li>{e}</li>);
};
export default App;
