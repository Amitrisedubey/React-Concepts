import { add } from "./calc";
import("./index.css");
import React from "react";
import ReactDom from "react-dom";
console.log(add(2, 5));
console.log(add(5, 5));
// const h1 = document.createElement("h1");
// h1.innerText = "Webpack and Babel";
// h1.classList.add("color-red");
// document.getElementById("root").appendChild(h1);
// ReactDom.render(
//   React.createElement(
//     "h1",
//     { className: "red-color" },
//     "Hello Webpack and ",
//     React.createElement("i", null, "React")
//   ),
//   document.getElementById("root")
//   //where to render the app
// );

ReactDom.render(
  <h1 className="red-color">
    Hello Webpack and{" "}
    <i>
      React <b>bold</b>
    </i>
  </h1>, //JSX
  document.getElementById("root")
);
