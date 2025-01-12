"use client"; // DOM

import { useState } from 'react';

import { TaskCheckbox } from './checkbox.js';


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
                <button
                    onClick={() => onEdit(task)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                    onClick={() => removeTask(task.id)}
                    >
                    Remove Task
                </button>
            </td>
        </tr>
    );
}