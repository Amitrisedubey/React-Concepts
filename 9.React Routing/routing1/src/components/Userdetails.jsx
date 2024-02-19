import { useParams } from "react-router-dom";

export const Userdetails = () => {
  const { userid } = useParams();
  return <div>Fetching user id from {userid}</div>;
};
