import React from 'react';

export function UpcomingTasks({ tasks }) {
    const upcomingTasks = tasks.filter((task) => task.status !== 'complete' && task.dueDate != null);
    upcomingTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    return (
        <div className="mt-8">
            <h3 className="text-lg font-bold mb-2">Upcoming Tasks</h3>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Task Name</th>
                        <th className="border border-gray-300 px-4 py-2">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {upcomingTasks.map((task) => (
                        <tr key={task.id}>
                            <td className="border border-gray-300 px-4 py-2">{task.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{task.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
