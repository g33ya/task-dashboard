"use client"; // DOM
import { useState } from 'react';

import { TableRow } from './tablerow.js';

export function TaskTable() {

    const [tasks, setTasks] = useState([]); // list of tasks
    const [newTask, setNewTask] = useState({ // create new task
        name: '',
        status: '',
        dueDate: '',
        notes:'',
    });
    const [editingTask, setEditingTask] = useState(null); // use to update exisiting tasks


    const handleInputChange = (inputEvent) => {
        const { name, value } = inputEvent.target; // value = new value
        setNewTask({
            ...newTask, // update existing task list
            [name]: value
        });
    }

    const handleFormSubmit = (newEvent) => {
        newEvent.preventDefault(); // stop page from reloading

        if (editingTask) {
            const updatedTasks = tasks.map((task) =>
                task === editingTask ? { ...task, ...newTask } : task
            );
            setTasks(updatedTasks);
            setEditingTask(null); // turn off editing
        } else { // adding a new task!
            const newTaskWithID = { ...newTask, id: Date.now() };
            setTasks([...tasks, newTaskWithID]);
        }
        
        setNewTask({
          name: '',
          dueDate: '',
          status: '',
          notes: ''
        });
    };

    const handleEdit = (task) => {
        setEditingTask(task); // edit selected task
        setNewTask(task); // prefills fields with task's original fields
    };

    const handleDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId)); // Remove task by ID
    };

    return (
        <div>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                <thead className="bg-gray-200">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Completed</th>
                    <th className="border border-gray-300 px-4 py-2">Task Number</th>
                    <th className="border border-gray-300 px-4 py-2">Task Name</th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                    <th className="border border-gray-300 px-4 py-2">Due Date</th>
                    <th className="border border-gray-300 px-4 py-2">Notes</th>

                </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <TableRow key={index} task={task} taskNum={index + 1} onEdit={handleEdit} removeTask={handleDelete}/>
                    ))}
                </tbody>
            </table>
            
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={newTask.name}
                        onChange={handleInputChange}
                        placeholder="Task Name"
                    />
                    <input
                        type="date"
                        name="dueDate"
                        value={newTask.dueDate}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="status"
                        value={newTask.status}
                        onChange={handleInputChange}
                        placeholder="Status"
                    />
                    <textarea
                        name="notes"
                        value={newTask.notes}
                        onChange={handleInputChange}
                        placeholder="Notes"
                    />
                    
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        {editingTask ? "Update Task" : "Add Task"}
                    </button>
                    
                </form>
            </div>
        </div>
    );
}