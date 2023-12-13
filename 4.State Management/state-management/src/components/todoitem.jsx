import "../App.css";
export const TodoItem = ({ title, status, id, handleDelete }) => {
  return (
    <div>
      <h1>
        {title}
        <p>{status ? "Done" : "Not Done"}</p>
      </h1>
      <button onClick={() => handleDelete(id)}>Mark as Done</button>
    </div>
  );
};
