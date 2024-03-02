import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/users"} style={{ margin: "10px" }}>
        Users
      </Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"} style={{ margin: "10px" }}>
        Contact Us
      </Link>
      <Link to={"/login"}>Login</Link>
    </div>
  );
};
