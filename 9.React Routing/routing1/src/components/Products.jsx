import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  console.log(id);
  return <h2>Product Details:{id}</h2>;
};
