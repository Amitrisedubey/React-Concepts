import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <div key={i}>
          <Link to={`/users/${e}`}>Users: {e}</Link>
        </div>
      ))}
    </div>
  );
};
