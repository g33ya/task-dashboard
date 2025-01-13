"use client";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard.js";
import { Header } from "./components/header.js";
import { PlusIcon , CheckIcon, PencilIcon} from '@heroicons/react/24/solid';
import "./globals.css";

export default function Home() {
  const [dashboards, setDashboards] = useState([
    { id: 1, name: "New Task List", tasks: [] },
  ]);
  const [currentDashboard, setCurrentDashboard] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  const currentDashboardData = dashboards.find(
    (dashboard) => dashboard.id === currentDashboard
  );

  const handleHeaderNameChange = (e) => {
    const newName = e.target.value;
    setDashboards((prevDashboards) =>
      prevDashboards.map((dashboard) =>
        dashboard.id === currentDashboard
          ? { ...dashboard, name: newName }
          : dashboard
      )
    );
  };

  const handleHeaderNameSubmit = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const addDashboard = () => {
    const newId = dashboards.length + 1;
    const newDashboard = {
      id: newId,
      name: `New Task List ${newId}`,
      tasks: [],
    };
    setDashboards([...dashboards, newDashboard]);
    setCurrentDashboard(newId);
  };

  const switchDashboard = (id) => {
    setCurrentDashboard(id);
  };

  const updateTasks = (dashboardId, newTasks) => {
    setDashboards((prevDashboards) =>
      prevDashboards.map((dashboard) =>
        dashboard.id === dashboardId
          ? { ...dashboard, tasks: newTasks }
          : dashboard
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="bg-red-500 text-black p-4 flex items-center space-x-4">
        {dashboards.map((dashboard) => (
          <button
            key={dashboard.id}
            onClick={() => switchDashboard(dashboard.id)}
            className={`px-4 py-2 rounded-lg ${
              currentDashboard === dashboard.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {dashboard.name}
          </button>
        ))}
        <button
          onClick={addDashboard}
          className="ml-auto bg-black text-white px-4 py-2 rounded-lg"
        >
          Add Dashboard
        </button>
      </div>

      <div className="text-black p-4 flex justify-between">
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <input
              type="text"
              value={currentDashboardData.name}
              onChange={handleHeaderNameChange}
              onKeyDown={handleHeaderNameSubmit}
              className="bg-transparent border-b text-xl text-black"
            />
          ) : (
            <h1 className="text-xl">{currentDashboardData.name}</h1>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-transparent text-gray-500 px-4 py-2 rounded-lg"
          >
            <div>
              {isEditing ? (
                <CheckIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <PencilIcon className="w-6 h-6 text-gray-500" />
              )}
            </div>          
          </button>
        </div>
      </div>

      <div className="p-4">
        {currentDashboardData && (
          <Dashboard
            tasks={currentDashboardData.tasks}
            updateTasks={(newTasks) =>
              updateTasks(currentDashboardData.id, newTasks)
            }
          />
        )}
      </div>
    </div>
  );
}
