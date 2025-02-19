import React from "react";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import bg from "../assets/empty-img.avif";
import { TaskCard } from "../components/task-card";

export const TaskList = () => {
  const { data, dispatch } = React.useContext(TodoContextProvider);

  return (
    <div>
      {data?.todoList?.length ? (
        <div>
          {data?.todoList?.map((item) => (
            <TaskCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="flex">
          <h2>Emty</h2>
        </div>
      )}
    </div>
  );
};
