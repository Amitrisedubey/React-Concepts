import { useState } from "react";
import "./todoinput.css";
export const TodoInput = ({ handleData }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    handleData(text);
  };
  return (
    <div id="divi">
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={handleChange}
        id="input-box"
      />
      <button onClick={handleClick}>ADD TODO</button>
    </div>
  );
};
