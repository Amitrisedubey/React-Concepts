import { useParams } from "react-router-dom";

export const Userdetails = () => {
  const { id } = useParams();
  return <div>Fetching user id from {id}</div>;
};
