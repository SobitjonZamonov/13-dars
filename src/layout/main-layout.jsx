import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="relative flex min-h-screen bg-gradient-to-b from-[#0d1d31] to-[#0c0d13] overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full rotate-[-45deg]">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[6em] h-[2px] bg-gradient-to-r from-white to-transparent rounded-full shadow-lg"
            style={{
              top: `${Math.random() * 100}vh`,
              left: "100%",
              animation: `fall ${6 + Math.random() * 6}s linear infinite, tail-fade ${6 + Math.random() * 6}s ease-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="
        w-[350px] p-[30px] flex flex-col items-center text-[45px] gap-[20px] 
        font-medium text-[#f2f2f2] bg-gradient-to-b from-[#152f4f] to-[#020022] h-screen relative z-10">
        <Link 
          className="relative mt-[30px] transition-transform duration-300 ease-out transform hover:scale-110 hover:translate-y-1 
          before:content-[''] before:absolute before:bottom-[-5px] before:left-0 before:w-full before:h-[2px] 
          before:bg-gradient-to-r before:from-red-500 before:to-cyan-500 before:scale-x-0 before:origin-right 
          before:transition-transform before:duration-300 before:ease-out 
          hover:before:scale-x-100 hover:before:origin-left"
          to={"/create-task"}
        >
          Create-Task
        </Link>
      </div>

      <div className="p-[30px] grow relative z-10">
        <Outlet />
      </div>

      <style>
        {`
          @keyframes fall {
            to {
              transform: translate3d(-30em, 0, 0);
            }
          }

          @keyframes tail-fade {
            0%, 50% {
              width: 6em;
              opacity: 1;
            }
            70%, 80% {
              width: 0;
              opacity: 0.4;
            }
            100% {
              width: 0;
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
