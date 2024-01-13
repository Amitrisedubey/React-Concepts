import { useEffect, useState } from "react";
import "../components/todo.css";
export const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  //console.log(state);
  useEffect(() => {
    getTodo();
  }, [page]);
  const getTodo = () => {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3}`)
      .then((d) => d.json())
      .then((res) => {
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
    });
  };
  return (
    <div
      style={{
        border: "1px solid red",
        background: "#80B3FF",
        width: "100%",
        maxWidth: "500px",
        margin: "45px auto 45px",
        height: "450px",
      }}
    >
      <h2>To-Do-List</h2>
      <div
        className="input-container"
        style={{
          background: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="Enter To Do List"
          style={{
            padding: "10px",
            flex: "1",
            border: "none",
            outline: "none",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            border: "none",
            outline: "none",
            padding: "10px",
            background: "#B6FFFA",
          }}
        >
          Add Task
        </button>
      </div>
      {todos.map((e, i) => (
        <div>
          <h2 style={{ textAlign: "justify", marginLeft: "25px" }}>
            {e.title}
          </h2>
          <p
            style={{
              textAlign: "justify",
              marginLeft: "25px",
              fontWeight: "bold",
            }}
          >
            {e.status ? "Done" : "Not Done"}
          </p>
        </div>
      ))}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
        style={{
          border: "none",
          outline: "none",
          padding: "10px",
          background: "#B6FFFA",
        }}
      >
        Prev
      </button>
      <button
        disabled={todos.length === 1}
        onClick={() => {
          setPage(page + 1);
        }}
        style={{
          border: "none",
          outline: "none",
          padding: "10px",
          background: "#B6FFFA",
        }}
        s
      >
        Next
      </button>
    </div>
  );
};
