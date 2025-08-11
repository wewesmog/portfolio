import Link from "next/link";
import { MessageSquareText } from "lucide-react";



export default function Nav() {
    return (
        <nav className="flex justify-between items-center w-full">
            
                {/* name */}
                <div>
               <p className="text-2xl font-extrabold">Wesley<span className="text-primary">Mogaka</span></p>
                </div>
{/* links */}
               <div className="flex gap-4  text-xl font-semibold items-center">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                </div>
                {/* contact */}
                <div>
                <Link href="/contact"><MessageSquareText className="w-10 h-10 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800" /></Link>
                </div>
               
            
        </nav>
    )
}