import App from "./App.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import { TodoContext } from "./context/todo-context/todo-context.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoContext>
      <App />
    </TodoContext>
  </BrowserRouter>
);
