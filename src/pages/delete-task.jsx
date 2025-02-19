import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContextProvider } from "../context/todo-context/todo-context";

export const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, dispatch } = React.useContext(TodoContextProvider);

  const task = data.todoList.find((item) => item.id === id);

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: id });
    navigate("/");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-red-500">Delete Task</h1>
      {task ? (
        <div>
          <p>Are you sure you want to delete <strong>{task.title}</strong>?</p>
          <div className="mt-4 flex gap-4">
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2">
              Yes, Delete
            </button>
            <button onClick={() => navigate(-1)} className="bg-gray-400 text-white px-4 py-2">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-red-500">Task not found!</p>
      )}
    </div>
  );
};
