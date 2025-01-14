"use client";
import { useState, useEffect } from "react";
import { Dashboard } from "./components/Dashboard.js";
import { Header } from "./components/header.js";
import { TrashIcon, CheckIcon, PencilIcon } from '@heroicons/react/24/solid';
import "./globals.css";

export default function Home() {

  // ------------------------### STATES ###------------------------
  const [dashboards, setDashboards] = useState([]);
  const [currentDashboard, setCurrentDashboard] = useState(dashboards.length > 0 ? dashboards[0].id : null);
  const [isEditing, setIsEditing] = useState(false);

  // ------------------------### FUNCTIONS/VARS ###------------------------

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

  const currentDashboardData = dashboards.find(
    (dashboard) => dashboard.id === currentDashboard
  );

  const addDashboard = () => {
    const newId = Date.now();
    const newDashboard = {
      id: newId,
      name: `New Task List ${dashboards.length + 1}`,
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

  const removeDashboard = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this task list?");
    
    if (isConfirmed) {
      const updatedDashboards = dashboards.filter(
        (dashboard) => dashboard.id !== currentDashboard
      );
      setDashboards(updatedDashboards);
  
      if (updatedDashboards.length > 0) {
        setCurrentDashboard(updatedDashboards[0].id);
      } else {
        setCurrentDashboard(null); 
      }
    }
  };

  // Save dashboards to local storage on change
  useEffect(() => {
    const storedDashboards = JSON.parse(localStorage.getItem('dashboards'));
    const initialDashboards = storedDashboards
      ? storedDashboards
      : [{ id: 1, name: "New Task List", tasks: [] }];
    setDashboards(initialDashboards);
    setCurrentDashboard(initialDashboards[0]?.id ?? null);
  }, []); 

  useEffect(() => {
    if (dashboards.length > 0) {
      localStorage.setItem('dashboards', JSON.stringify(dashboards));
    }
  }, [dashboards]);

  return (
    <div>
      <Header />
      <div className="bg-red-500 text-black p-4 relative h-20">
        <div className="absolute bottom-0 left-0 flex gap-2">
          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() => switchDashboard(dashboard.id)}
              className={`px-4 py-2 rounded-l-none rounded-t-lg ${
                currentDashboard === dashboard.id
                  ? "bg-red-400 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {dashboard.name}
            </button>
          ))}
          <button
            onClick={addDashboard}
            className="bg-gray-700 text-white px-4 py-2 rounded-t-lg"
          >
            Add Task List
          </button>
        </div>
      </div>
      <div className="text-black p-4 flex justify-between">
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <input
              type="text"
              value={currentDashboardData ? currentDashboardData.name : ""}
              onChange={handleHeaderNameChange}
              onKeyDown={handleHeaderNameSubmit}
              className="bg-transparent border-b text-xl text-black"
            />
          ) : (
            <h1 className="text-xl">{currentDashboardData ? currentDashboardData.name : "No Dashboard"}</h1>
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
        <button
          onClick={removeDashboard}
          disabled={dashboards.length <= 1} 
          className={`px-4 py-2 rounded-lg flex items-center ${
            dashboards.length > 1 ? "bg-red-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <TrashIcon className="w-6 h-6 mr-2" />
          Remove Task List
        </button>
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
