"use client"; // DOM

import { useState } from 'react';

import { TableField } from './tablefield.js';
import { TaskCheckbox } from './checkbox.js';


export function TableRow() {
    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <tr className={`bg-white ${isChecked ? 'line-through' : ''}`}>
            <TaskCheckbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
            <TableField fieldType="tasknum" />
            <td class="border border-gray-300 px-4 py-2">Create simple JS website</td>
            <td class="border border-gray-300 px-4 py-2">In Progress</td>
            <td class="border border-gray-300 px-4 py-2">1/17/25</td>
            <td class="border border-gray-300 px-4 py-2">Let's see what I can do!</td>
        </tr>
    );
}