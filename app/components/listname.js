"use client"; 
import { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid'; 

export function ListName() {
    const [listName, setListName] = useState("New Task List");
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (newListName) => {
        setListName(newListName);
        setIsEditing(false);
    };
    
    return (
        <div className="flex items-center space-x-1">
            {isEditing ? (
                <input
                    type="text"
                    value={listName}
                    onChange={(event) => setListName(event.target.value)}
                    onBlur={() => setIsEditing(false)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") handleSave(listName); 
                    }}
                    className="border p-2 rounded w-64"
                    autoFocus
                />
            ) : (
                <h1 className="text-2xl font-bold ml-4">{listName}</h1>
            )}
            <button
                onClick={() => setIsEditing(true)}
                className=" text-gray-700 w-12 h-12 focus:outline-none flex items-center justify-center ml-10"
            >
                <PencilIcon className="w-5 h-5" />
            </button>
      </div>
    );
}
