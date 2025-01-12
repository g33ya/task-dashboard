import { TaskCheckbox } from './checkbox.js';

export function TableField( { fieldType }) {
    let content;

    switch (fieldType) {
        case 'checkbox':
            content = <TaskCheckbox />
            break;
        case 'tasknum':
            content = 1
            break;
    }

    return (
        <td className="border border-gray-300 px-4 py-2">
            {content}
        </td>
    );
}