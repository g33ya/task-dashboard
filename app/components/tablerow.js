"use client"; // DOM
import { useState, useEffect } from 'react';
import { TaskCheckbox } from './checkbox.js';
import { PlusIcon , PencilIcon, TrashIcon} from '@heroicons/react/24/solid';


export function TableRow({ task, taskNum, onEdit, removeTask, updateTaskStatus }) {

    // ------------------------### STATES ###------------------------
    const [isChecked, setIsChecked] = useState(task.status === 'complete');

    // ------------------------### FUNCTIONS/VARS ###------------------------

    const handleCheckboxChange = () => {
        if (!isChecked) {
            // Mark task as complete when checkbox is checked
            updateTaskStatus(task.id, 'complete');
        } else {
            // Reset task status to "in-progress" when checkbox is unchecked
            updateTaskStatus(task.id, 'in-progress');
        }
    
        setIsChecked(!isChecked); // Toggle checkbox state
    };

    const statusDisplay = {
        'not-started': 'Not Started',
        'in-progress': 'In Progress',
        'complete': 'Complete'
    };

    return (
        <tr className={`bg-white ${isChecked ? 'line-through' : ''}`}>
            <TaskCheckbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
            <td className="border border-gray-300 px-4 py-2">{taskNum}</td>
            <td className="border border-gray-300 px-4 py-2">{task.name}</td>
            <td className="border border-gray-300 px-4 py-2">
            <span className={`inline-block px-2 py-1 rounded-md ${
                task.status === 'not-started' ? 'bg-red-200 text-red-800' :
                task.status === 'in-progress' ? 'bg-yellow-200 text-yellow-800' :
                task.status === 'complete' ? 'bg-green-200 text-green-800' :
                ''
            }`}>
                {statusDisplay[task.status]}
            </span>
            </td>
            <td className="border border-gray-300 px-4 py-2">{task.dueDate}</td>
            <td className="border border-gray-300 px-4 py-2">{task.notes}</td> 
            <td className="border border-gray-300 px-4 py-2">
                <div className="flex space-x-2">
                    <button
                        onClick={() => onEdit(task)}
                        className="bg-blue-500 text-white w-12 h-12 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
                    >
                        <PencilIcon className="w-6 h-6" />
                    </button>
                    <button
                        type="button"
                        className="bg-red-500 text-white w-12 h-12 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
                        onClick={() => removeTask(task.id)}
                    >
                        <TrashIcon className="w-6 h-6" />
                    </button>
                </div>
            </td>
        </tr>
    );
}
