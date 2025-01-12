//import Image from "next/image";
import { TaskTable } from './components/table.js';
import { SearchBar } from './components/searchbar.js';
import { ListName } from './components/listname.js';



export default function Home() {
  return (
    <div>
      <div className="bg-red-500 text-black p-4">TaskNest</div>
      <ListName />
      <SearchBar />
    </div>      
  );
}
