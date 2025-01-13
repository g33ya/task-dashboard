export const handleExportJSON = (tasks) => {
    const jsonString = JSON.stringify(tasks, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    
    link.download = 'tasks.json';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
