import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Userdetails = () => {
  const { userid } = useParams();
  const [user, setuserDeatils] = useState([]);
  console.log(user);
  useEffect(() => {
    getuserDetails();
  }, [userid]);
  const getuserDetails = () => {
    fetch(`https://reqres.in/api/users/${userid}`).then((res) => {
      res.json().then((result) => {
        console.log(result.data);
        setuserDeatils(result.data);
      });
    });
  };
  return (
    <div>
      <img src={user.avatar} alt="" />
    </div>
  );
};
