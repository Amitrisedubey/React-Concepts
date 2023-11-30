import { add } from "./calc";
import("./index.css");
console.log(add(3, 5));
console.log(add(3, 33));
const h1 = document.createElement("h1");
h1.innerText = "Webpack";
h1.classList.add("color-red");
document.getElementById("root").appendChild(h1);
