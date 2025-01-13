"use client"; // DOM
import { useState } from 'react';
import { TaskTable } from './table.js';

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div>
            <div className="p-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search tasks..."
                    className="p-2 border border-gray-300 rounded-lg w-full"
                />
            </div>
            <TaskTable searchTerm={searchTerm} />
        </div>
    );
}