import { TaskCheckbox } from './checkbox.js';

export function TableRow() {
    return (
        <tr class="bg-white">
            <td class="border border-gray-300 px-4 py-2"><TaskCheckbox /></td>
            <td class="border border-gray-300 px-4 py-2">1</td>
            <td class="border border-gray-300 px-4 py-2">Create simple JS website</td>
            <td class="border border-gray-300 px-4 py-2">In Progress</td>
            <td class="border border-gray-300 px-4 py-2">1/17/25</td>
            <td class="border border-gray-300 px-4 py-2">Let's see what I can do!</td>
        </tr>
    );
}