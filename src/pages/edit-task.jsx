import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import { Form } from "../components/form";

export const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, dispatch } = React.useContext(TodoContextProvider);

  const defValue = data.todoList.find((item) => item.id === id);

  return (
    <div>
      <h1 className="text-4xl text-[#fff]">Edit task</h1>
      <button
        onClick={() => router(-1)}
        className="relative inline-block px-[40px] py-[14px] text-white text-[1rem] uppercase tracking-[.15rem] rounded-full 
        overflow-hidden transition-all duration-300 z-10
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-full before:bg-[#099cff] before:rounded-full before:transition-all before:duration-300 before:z-0
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-[#0cf] after:rounded-full after:z-[-1]
        hover:before:w-full mt-[30px] mb-[44px]"
      >
        <i className='bx bxs-chevrons-left pr-[10px]'></i>
        Back
      </button>

      <Form defValue={defValue} />
    </div>
  );
};
