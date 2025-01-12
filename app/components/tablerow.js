"use client"; // DOM

import { useState } from 'react';

import { TableField } from './tablefield.js';
import { TaskCheckbox } from './checkbox.js';


export function TableRow( {task, taskNumm, onEdit} ) {
    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <tr className={`bg-white ${isChecked ? 'line-through' : ''}`}>
            <TaskCheckbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
            <TableField fieldType="tasknum" />
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
            </td>
        </tr>
    );
}