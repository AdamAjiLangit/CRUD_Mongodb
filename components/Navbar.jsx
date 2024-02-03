import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-blue-500 px-8 py-3 rounded">
            <a href={"/"}><img src="https://avatars.githubusercontent.com/u/56476691?v=4" className="w-20 h-auto" alt="Logo" /></a>
            <Link className="text-white font-bold" href={"/"}>Ice Bear Dev</Link>
            <Link className="bg-blue-500 font-bold text-white p-2 border-2 rounded-md" href={"/addTopic"}>Add Topic</Link>
        </nav>
    );
}