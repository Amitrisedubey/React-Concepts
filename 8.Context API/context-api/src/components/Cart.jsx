import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return <div>No of Cart items: {cart}</div>;
};
