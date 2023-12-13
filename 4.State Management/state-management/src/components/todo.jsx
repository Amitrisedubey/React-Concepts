import { nanoid } from "nanoid";
import { TodoInput } from "./todoinput";
import { TodoItem } from "./todoitem";
import { useState } from "react";

export const Todo = () => {
  const [list, setList] = useState([]);
  console.log(list);
  const handleData = (data) => {
    const payload = {
      title: data,
      status: true,
      id: nanoid(9),
    };
    console.log(payload);
    setList([...list, payload]);
  };
  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <div>
      <TodoInput handleData={handleData} />
      {list.map((e) => (
        <TodoItem key={e.id} {...e} handleDelete={handleDelete} />
      ))}
    </div>
  );
};
