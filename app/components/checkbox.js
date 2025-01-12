"use client"; // DOM
import { useState } from 'react';

export function TaskCheckbox( {isChecked, handleCheckboxChange}) {

    return (
        <td className="border border-gray-300 px-4 py-2">
            <label htmlFor="completed">
                <input
                    type="checkbox"
                    id="completed"
                    name="completed"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </label>
        </td>
    );
}