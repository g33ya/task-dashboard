import { TableRow } from './tablerow.js';

export function TaskTable() {
    return (
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead className="bg-gray-200">
            <tr>
                <th className="border border-gray-300 px-4 py-2">Completed</th>
                <th className="border border-gray-300 px-4 py-2">Task Number</th>
                <th className="border border-gray-300 px-4 py-2">Task Name</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Due Date</th>
                <th className="border border-gray-300 px-4 py-2">Notes</th>

            </tr>
            </thead>
            <tbody>
            
            <TableRow />
            
            <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Holder</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Review Basics</td>
                <td className="border border-gray-300 px-4 py-2">In Progress</td>
                <td className="border border-gray-300 px-4 py-2">1/17/25</td>
                <td className="border border-gray-300 px-4 py-2">React/JS</td>
            </tr>
            </tbody>
        </table>
    );
}