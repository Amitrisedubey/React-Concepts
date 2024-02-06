import { useContext } from "react";
import { Cart } from "./Cart";
import { ThemeContext } from "../contexts/ThemeContext";
import { Div } from "../styled/styled";
export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Div theme={theme}>Theme is : {theme} in navbar</Div>
      <button onClick={toggleTheme}>Change Theme</button>
      <Cart />
    </div>
  );
};
