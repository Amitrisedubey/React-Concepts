import { useEffect, useState } from "react";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodo();
  }, []);
  const getTodo = () => {
    fetch("http://localhost:3001/todos")
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setTodos(res);
      });
  };
  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getTodo();
      setText("");
    });
  };
  return (
    <div>
      <h3>To-Do List</h3>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="enter todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((e, i) => (
        <div key={i}>
          <h3>{e.title}</h3>
          <p>{e.status ? "Done" : "Not Done"}</p>
        </div>
      ))}
    </div>
  );
};
