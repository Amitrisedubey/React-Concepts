import { Link } from "react-router-dom";

export const Navabr = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about" style={{ margin: "10px" }}>
        About
      </Link>
      <Link to="/users" style={{ margin: "10px" }}>
        Users
      </Link>
      <Link to="./contactus">Contact Us</Link>
      <Link style={{ margin: "10px" }}>Login</Link>
    </div>
  );
};
