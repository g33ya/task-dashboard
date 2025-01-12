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

    const handleInputChange = (inputEvent) => {
        const { name, newValue } = inputEvent.target;
        setNewTask({
            ...newTask, // update existing task list
            [name]: newValue
        });
    }

    const handleFormSubmit = (newEvent) => {
        newEvent.preventDefault(); // stop page from reloading
        
        setTasks([...tasks, { ...newTask, completed: false }]); // add new task (creates new array)
        
        setNewTask({
          name: '',
          dueDate: '',
          status: '',
          notes: ''
        });
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
                
                <TableRow />
                
                <tr className="bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">Holder</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">Review Basics</td>
                    <td className="border border-gray-300 px-4 py-2">In Progress</td>
                    <td className="border border-gray-300 px-4 py-2">1/17/25</td>
                    <td className="border border-gray-300 px-4 py-2">React/JS</td>
                </tr>
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

                </form>
            </div>
        </div>
    );
}