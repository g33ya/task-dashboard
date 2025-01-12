"use client"; // DOM

import { useState } from 'react';

import { TableField } from './tablefield.js';
import { TaskCheckbox } from './checkbox.js';


export function TableRow( {task, taskNum} ) {
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
        </tr>
    );
}