"use client"; // DOM
import { useState } from 'react';
import { TableRow } from './tablerow.js';
import { SearchBar } from './searchbar.js';

import { PlusIcon , CheckIcon} from '@heroicons/react/24/solid'; // For solid icons

export function TaskTable( { searchTerm }) {

    const [tasks, setTasks] = useState([]); // list of tasks
    const [newTask, setNewTask] = useState({ // create new task
        name: '',
        status: 'not-started',
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
    const [selectedTab, setSelectedTab] = useState('all'); 


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

    const filteredTasks = tasks.filter(task => {
        const matchesSearchTerm = 
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.dueDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.notes.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTab =
            selectedTab === 'all' || task.status === selectedTab;

        return matchesSearchTerm && matchesTab;
    });

    return (
        <div>
            <div className="flex space-x-4 border-b-2 mb-4">
                {['all', 'not-started', 'in-progress', 'complete'].map((status) => (
                    <button
                        key={status}
                        className={`px-4 py-2 font-medium ${selectedTab === status ? 'border-b-2 border-green-500' : ''}`}
                        onClick={() => setSelectedTab(status)}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                    </button>
                ))}
            </div>
            
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
                    {filteredTasks.map((task, index) => (
                        <TableRow key={task.id} task={task} taskNum={index + 1} onEdit={handleEdit} removeTask={handleDelete} />
                    ))}
                </tbody>
            </table>
            
            <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
                <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">             
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
                    <select
                        name="status"
                        value={newTask.status || "not-started"}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                    >
                        <option value="not-started">Not Started</option>
                        <option value="in-progress">In Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                    <div className="flex items-center w-full sm:w-auto space-x-4">
                        <textarea
                            name="notes"
                            value={newTask.notes}
                            onChange={handleInputChange}
                            placeholder="Notes"
                            className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-auto"
                        />
                        <button
                            type="submit"
                            className="bg-green-300 text-white w-12 h-12 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center"
                            aria-label={editingTask ? "Update Task" : "Add Task"}
                        >
                            {editingTask ? <CheckIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}