import { TableField } from './tablefield.js';

export function TableRow() {
    return (
        <tr class="bg-white">
            <TableField fieldType="checkbox" />
            <TableField fieldType="tasknum" />
            <td class="border border-gray-300 px-4 py-2">Create simple JS website</td>
            <td class="border border-gray-300 px-4 py-2">In Progress</td>
            <td class="border border-gray-300 px-4 py-2">1/17/25</td>
            <td class="border border-gray-300 px-4 py-2">Let's see what I can do!</td>
        </tr>
    );
}