import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { TaskList } from "./pages/task-list";
import { CreateTask } from "./pages/create-task";
import { EditTask } from "./pages/edit-task";
import { DeleteTask } from "./pages/delete-task";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<TaskList />} />
        <Route path="create-task" element={<CreateTask />} />
        <Route path="edit-task/:id" element={<EditTask />} />
        <Route path="delete-task/:id" element={<DeleteTask />} />
      </Route>
    </Routes>
  );
}

export default App;
