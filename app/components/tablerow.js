"use client"; // DOM

import { useState } from 'react';

import { TableField } from './tablefield.js';
import { TaskCheckbox } from './checkbox.js';


export function TableRow( {tasks} ) {
    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <tr className={`bg-white ${isChecked ? 'line-through' : ''}`}>
            <TaskCheckbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
            {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.notes}</td>
            </tr>
          ))}

        </tr>
    );
}