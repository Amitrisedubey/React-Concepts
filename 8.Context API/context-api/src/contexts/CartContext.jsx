import { createContext, useState } from "react";
export const CartContext = createContext(); //type
// CartContext =>Global Box which sit Outside the app so we can access data globally in any components.
export const CartContextProvider = ({ children }) => {
  //Context Provider
  const [cart, setCart] = useState(10);
  const handleCartUpdate = (value) => {
    setCart(cart + value);
  };
  return (
    <CartContext.Provider value={{ cart, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
};
