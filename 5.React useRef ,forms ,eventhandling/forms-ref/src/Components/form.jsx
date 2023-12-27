import { useRef, useState } from "react";

export const Forms = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
    email: "",
  });
  const ref = useRef(null);

  //   console.log(form);
  const handleChange = (e) => {
    console.log(ref.current.files);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
          name="username"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="Enter Age"
          name="age"
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Enter Email"
          name="email"
        />
        <input onChange={handleChange} type="file" ref={ref} />
        <input type="submit" value="submit" />
      </form>
      {form.username}
    </div>
  );
};
