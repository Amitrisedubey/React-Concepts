import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  const [user, setUsers] = useState([]);
  console.log(user);
  const fetchUser = () => {
    fetch("https://reqres.in/api/users").then((res) => {
      res.json().then(function (res) {
        setUsers(res.data);
      });
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1 style={{ color: "red" }}>Users</h1>
      {user.map((user, i) => (
        <div key={i} style={{ padding: "3px" }}>
          <Link
            to={`/users/${user.id}`}
            style={{ textDecoration: "none" }}
          >{`${user.first_name} ${user.last_name}`}</Link>
        </div>
      ))}
    </div>
  );
};
