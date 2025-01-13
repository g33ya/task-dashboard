"use client"; // DOM
import { useState } from 'react';
import { TableRow } from './tablerow.js';
import { ProgressWheel } from './progresswheel.js'
import { handleExportJSON } from '../jsonexport.js'
import { PlusIcon , CheckIcon} from '@heroicons/react/24/solid';

export function TaskTable( { searchTerm }) {

    // ------------------------### STATES ###------------------------

    const [tasks, setTasks] = useState([]); // list of tasks
    const [newTask, setNewTask] = useState({ // create new task
        name: '',
        status: 'not-started',
        dueDate: '',
        notes:'',
    });
    const [editingTask, setEditingTask] = useState(null); // use to update exisiting tasks

    // Tabs of 5 tasks each
    const [selectedTab, setSelectedTab] = useState('all'); 
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5; 

    // ------------------------### FUNCTIONS/VARS ###------------------------

    const updateFormField = (inputEvent) => {
        const { name, value } = inputEvent.target; // grab specific form field
        setNewTask({
            ...newTask, // update existing task list
            [name]: value
        });
    }

    // Updates/adds new task to list
    const saveTask = (newEvent) => {
        newEvent.preventDefault(); // stop page from reloading

        if (editingTask) { // editing existing task
            const updatedTasks = tasks.map((task) =>
                task === editingTask ? { ...task, ...newTask } : task
            );
            setTasks(updatedTasks);
            setEditingTask(null); // turn off editing
        } else { // adding a new task!
            const newTaskWithID = { ...newTask, id: Date.now() };
            setTasks([newTaskWithID, ...tasks]);
        }       
        setNewTask({
          name: '',
          dueDate: '',
          status: 'not-started',
          notes: ''
        });
    };

    // Update edit state, populate form w/ original fields
    const handleEdit = (task) => {
        setEditingTask(task); 
        setNewTask(task);
    };

    // Remove task
    const handleDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    // Only show tasks that include search term
    const filteredTasks = tasks.filter(task => {
        const matchesSearchTerm = 
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.dueDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.notes.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTab = selectedTab === 'all' || task.status === selectedTab; // in progress, completed

        return matchesSearchTerm && matchesTab;
    });

    // Sort by soonest deadline
    filteredTasks.sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
    });

    const updateTaskStatus = (taskId, newStatus) => {
        const updatedTask = tasks.find(task => task.id === taskId);
        
        if (updatedTask) {
            updatedTask.status = newStatus;
            setTasks([...tasks]);
        }
    };


    // Show 5 tasks per table page
    const totalTasks = filteredTasks.length;
    const startIndex = (currentPage - 1) * tasksPerPage;
    const currentTasks = filteredTasks.slice(startIndex, startIndex + tasksPerPage);
    const totalPages = Math.ceil(totalTasks / tasksPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Find % of completed tasks for progress wheel
    const completedTasks = tasks.filter((task) => task.status === 'complete').length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0; 
    
    // JSON function
    const handleClickExport = () => {
        handleExportJSON(tasks); 
    };

    return (
        <div className="flex ml-5">
            <div className="w-3/4 flex flex-col">
                <div className="flex space-x-4 border-b-2 mb-4">
                    {['all', 'not-started', 'in-progress', 'complete'].map((status) => ( // filter tasks displayed by status
                        <button
                            key={status}
                            className={`px-4 py-2 font-medium ${selectedTab === status ? 'border-b-2 border-green-500' : ''}`}
                            onClick={() => {
                                setSelectedTab(status)
                                setCurrentPage(1);
                            }}
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
                        {currentTasks.map((task, index) => (
                            <TableRow key={task.id} task={task} taskNum={startIndex + index + 1} onEdit={handleEdit} removeTask={handleDelete} updateTaskStatus={updateTaskStatus}/>
                        ))}
                    </tbody>
                </table>
        
                <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
                    <form onSubmit={saveTask} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">             
                        <input
                        type="text"
                        name="name"
                        value={newTask.name}
                        onChange={updateFormField}
                        placeholder="Task Name"
                        />
                        <input
                        type="date"
                        name="dueDate"
                        value={newTask.dueDate}
                        onChange={updateFormField}
                        />
                        <select
                            name="status"
                            value={newTask.status || "not-started"}
                            onChange={updateFormField}
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
                                onChange={updateFormField}
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
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 rounded-l-md"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-green-300' : 'bg-gray-200'} rounded-md`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 rounded-r-md"
                    >
                        Next
                    </button>
                </div>   
            </div>
            <div className="w-1/4 p-4 pl-30 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4">Task Progress</h3>
                <ProgressWheel progress={progress} />
                <button
                    onClick={handleClickExport}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
                >
                    Export Tasks as JSON
                </button>
            </div>
        </div>     
    );
}