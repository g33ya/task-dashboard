//import Image from "next/image";
import { TaskTable } from './components/table.js';
import { Dashboard } from './components/Dashboard.js';
import { ListName } from './components/listname.js';
import { Header } from './components/header.js';
import './globals.css'; // Import global CSS here

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-red-500 text-black p-4">TaskNest</div>
      <ListName />
      <Dashboard />
    </div>      
  );
}
