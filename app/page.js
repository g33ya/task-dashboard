//import Image from "next/image";
import { TaskTable } from './components/table.js';
import { SearchBar } from './components/searchbar.js';


export default function Home() {
  return (
    <div>
      <div className="bg-red-500 text-black p-4">TaskNest</div>
      <SearchBar />
    </div>      
  );
}
