import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import { todoAction } from "../context/todo-context/todo-reducer";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export const Form = ({ defValue }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defValue?.title,
      des: defValue?.des,
    },
  });

  const { dispatch } = useContext(TodoContextProvider);

  const navigate = useNavigate();

  const submit = (data) => {
    if (!defValue) {
      dispatch({
        type: todoAction.CREATE_TODO,
        value: {
          ...data,
          id: nanoid(),
        },
      });
    } else {
      dispatch({
        type: todoAction.EDIT_TODO,
        value: { ...data, id: defValue.id },
      });
    }
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="bg-transpart border-1 rounded-3xl w-[400px] h-[60px] text-3xl text-[#fff] ml-[30px] mb-[20px] pl-[20px]"
            {...register("title", {
              required: true,
              minLength: { value: 3, message: "eng kam qiymat 3 ta" },
            })}
            type="text"
            placeholder="Title"
          />
          {errors.title && (
            <p className="text-[12px] text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div>
          <input
            className="bg-transpart border-1 rounded-3xl w-[600px] h-[100px] text-2xl text-[#fff] ml-[30px] mb-[20px] pl-[20px]"
            {...register("des", {
              required: true,
              minLength: { value: 3, message: "eng kam qiymat 3 ta" },
            })}
            type="text"
          />
          {errors.des && (
            <p className="text-[12px] text-red-500">{errors.des.message}</p>
          )}
        </div>
        <button className="relative inline-block px-[40px] py-[14px] text-white text-[1rem] uppercase tracking-[.15rem] rounded-full 
        overflow-hidden transition-all duration-300 z-10
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-full before:bg-[#099cff] before:rounded-full before:transition-all before:duration-300 before:z-0
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-[#0cf] after:rounded-full after:z-[-1]
        hover:before:w-full mt-[30px] mb-[44px] ml-[30px]" type="submit">
          send<i class='bx bx-send bx-fade-right' ></i>
        </button>
      </form>
    </>
  );
};
