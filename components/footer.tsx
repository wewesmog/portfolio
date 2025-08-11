// footer component

import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram,  } from "react-icons/fa";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";


export default function Footer() {
    return (
        <footer className="flex flex-col gap-10 items-center w-full mx-4 mb-4 mt-20">
            <Separator className="w-full" />
            <div className="flex justify-between items-center w-full">
             <div className="flex gap-4  text-xl font-semibold items-center">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                </div>
            
            <div>
            <div className="flex gap-4  text-xl font-semibold items-center">
                <Link href="/"><FaLinkedin /></Link>
                <Link href="/"><FaGithub /></Link>
                <Link href="/"><FaTwitter /></Link>
                <Link href="/"><FaInstagram /></Link>
                </div>
                </div>
            </div>
            
  
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold mb-4"> Interested in working together? </h2>
               <div className="flex gap-2 w-full justify-between">
                <Button variant="outline">Contact me</Button>
                <Button variant="default">Download CV</Button>
               </div>
                
                </div>
                <div>
                <p>© 2025 Wesley Mogaka. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}