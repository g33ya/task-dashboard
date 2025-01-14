export function Header({ isChecked, handleCheckboxChange }) {
    return (
        <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="w-20 h-20 mr-2 pt-2 pb-2" />
            <h1 className="text-4xl font-bold">TaskNest</h1> 
        </div>
    );
}
