"use client";
import { useState } from "react";
import { TaskTable } from "./table.js";

export function Dashboard({ tasks, updateTasks }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTaskUpdate = (newTasks) => {
    updateTasks(newTasks);
  };

  return (
    <div>
      <div className="p-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search tasks..."
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
      <TaskTable searchTerm={searchTerm} tasks={tasks} updateTasks={handleTaskUpdate} />
    </div>
  );
}
