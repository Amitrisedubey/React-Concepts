import { useState } from "react";

export const Login = () => {
  const [forms, setForms] = useState({});
  console.log(forms);
  const handleChange = ({ target: { name, value } }) => {
    setForms({
      ...forms,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Enter Email"
      />
      <input
        onChange={handleChange}
        type="email"
        name="password"
        placeholder="Enter Password"
      />
      <button>Sign in </button>
    </div>
  );
};
