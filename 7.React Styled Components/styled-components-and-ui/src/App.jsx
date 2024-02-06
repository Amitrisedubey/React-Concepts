import logo from "./logo.svg";
import "./App.css";
import { Button, Div } from "./styled/Button";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      {/* <Div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          excepturi, numquam repellat quam exercitationem dolores architecto a
          distinctio atque alias, possimus perspiciatis autem blanditiis
          perferendis laudantium necessitatibus. Quam, debitis nisi.
        </p>
      </Div> */}
      <Button
        theme={theme}
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click Me
      </Button>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
