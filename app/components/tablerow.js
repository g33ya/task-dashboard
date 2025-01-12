"use client"; // DOM

import { useState } from 'react';
import { TaskCheckbox } from './checkbox.js';
import { PencilIcon } from '@heroicons/react/24/solid'; // Import the Pencil Icon
import { TrashIcon } from '@heroicons/react/24/solid'; // Import the Pencil Icon


export function TableRow( {task, taskNum, onEdit, removeTask} ) {
    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <tr className={`bg-white ${isChecked ? 'line-through' : ''}`}>
            <TaskCheckbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
            <td className="border border-gray-300 px-4 py-2">{taskNum}</td>
            <td className="border border-gray-300 px-4 py-2">{task.name}</td>
            <td className="border border-gray-300 px-4 py-2">{task.status}</td>
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