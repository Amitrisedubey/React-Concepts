import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"} style={{ margin: "10px" }}>
        About
      </Link>
      <Link to={"/users"}>Users</Link>
      <Link to={"/contactus"} style={{ margin: "10px" }}>
        Contact Us
      </Link>
      <Link to={"login"}>Login</Link>
    </div>
  );
};
