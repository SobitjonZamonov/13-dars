import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContextProvider } from "../context/todo-context/todo-context";

export const TaskCard = ({ id, title, des }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(TodoContextProvider);

  const changeData = () => {
    navigate(`/edit-task/${id}`);
  };

  const deleteData = () => {
    dispatch({ type: "DELETE_TODO", value: id });
    navigate("/");
  };

  return (
    <div
      className="rounded-lg flex justify-between items-center mb-[20px] w-full border border-blue-500 p-[40px]"
      key={id}
    >
      <div>
        <h1 className="text-5xl text-[#fff] mb-5">{title}</h1>
        <p className="text-3xl text-[#fff]">{des}</p>
      </div>
      <div className="flex gap-[16px]">
      <button
        onClick={changeData}
        className="relative w-[120px] h-[50px]  text-white text-sm uppercase font-bold cursor-pointer transition-all duration-500 
          before:content-[attr(data-front)] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:flex before:items-center before:justify-center before:bg-gray-800 before:text-gray-300 before:transition-all before:duration-500 before:transform before:rotate-x-0 before:opacity-100
          after:content-[attr(data-back)] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:flex after:items-center after:justify-center after:bg-gray-300 after:text-gray-800 after:transition-all after:duration-500 after:transform after:rotate-x-90 after:opacity-0
          hover:before:rotate-x-90 hover:before:opacity-0 hover:after:rotate-x-0 hover:after:opacity-100"
        data-front="Edit"
        data-back="Update"
      >
      </button>

        

        <button
        onClick={deleteData}
        className="relative flex items-center justify-center w-[150px] h-[50px] border-1 border-[#fff] text-white font-bold rounded-md shadow-lg overflow-hidden transition-all duration-300 
          bg-red-500 shadow-[0_0_40px_40px_rgba(59,130,246,1)_inset,0_0_0_0_rgba(59,130,246,1)] 
          hover:shadow-[0_0_10px_0_rgba(59,130,246,1)_inset,0_0_10px_4px_rgba(59,130,246,1)] 
          hover:bg-red-600 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
