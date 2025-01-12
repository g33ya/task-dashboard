import { TableRow } from './tablerow.js';

export function TaskTable() {
    return (
        <table class="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead class="bg-gray-200">
            <tr>
                <th class="border border-gray-300 px-4 py-2">Completed</th>
                <th class="border border-gray-300 px-4 py-2">Task Number</th>
                <th class="border border-gray-300 px-4 py-2">Task Name</th>
                <th class="border border-gray-300 px-4 py-2">Status</th>
                <th class="border border-gray-300 px-4 py-2">Due Date</th>
                <th class="border border-gray-300 px-4 py-2">Notes</th>

            </tr>
            </thead>
            <tbody>
            
            <TableRow />
            
            <tr class="bg-gray-100">
                <td class="border border-gray-300 px-4 py-2">Holder</td>
                <td class="border border-gray-300 px-4 py-2">2</td>
                <td class="border border-gray-300 px-4 py-2">Review Basics</td>
                <td class="border border-gray-300 px-4 py-2">In Progress</td>
                <td class="border border-gray-300 px-4 py-2">1/17/25</td>
                <td class="border border-gray-300 px-4 py-2">React/JS</td>
            </tr>
            </tbody>
        </table>
    );
}