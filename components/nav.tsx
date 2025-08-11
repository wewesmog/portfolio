"use client";
import Link from "next/link";
import { Menu, X, MessageSquareText } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";



export default function Nav() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="w-full">
        <nav className="flex justify-between items-center w-full">
            
                {/* name */}
                <div>
                    {/* Home link */}
               <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                 <p className="text-2xl font-extrabold transition-colors hover:text-primary/80">
                   Wes<span className="text-primary">Mog</span>
                 </p>
               </Link>
                </div>
{/* links */} 
{/* Mobile: show hamburger; Desktop: show nav links */}
<div className="md:hidden">
    <Button variant="outline" size="lg" aria-label="Open menu" onClick={() => setOpen(true)} className="transition-transform hover:scale-105">
        <Menu />
    </Button>
</div>
{open && (
  <div className="fixed inset-0 z-50 md:hidden">
    <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
    <div className="absolute left-0 top-0 h-full w-72 bg-background shadow-lg p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
                    {/* Home link */}
               <Link href="/"><p className="text-2xl font-extrabold">Wes<span className="text-primary">Mog</span></p></Link>
                </div> 
        <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X className="h-5 w-5" />
        </Button>
      </div>
      <Link href="/" onClick={() => setOpen(false)} className="text-lg hover:text-primary">Home</Link>
      <Link href="/projects" onClick={() => setOpen(false)} className="text-lg hover:text-primary">Projects</Link>
      <Link href="/#story" onClick={() => setOpen(false)} className="text-lg hover:text-primary">About</Link>
      <Link href="/contact" onClick={() => setOpen(false)} className="text-lg hover:text-primary">Contact</Link>
    </div>
  </div>
)}  
                <div className="hidden md:flex gap-6 text-xl font-semibold items-center">
                <Link href="/" className="hover:underline underline-offset-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Home</Link>
                <Link href="/projects" className="hover:underline underline-offset-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Projects</Link>
                <Link href="/#story" className="hover:underline underline-offset-4 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">About</Link>
                </div>

                {/* contact */}
                <div className="hidden md:block">
                <Link href="/contact" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full inline-flex">
                  <MessageSquareText className="w-10 h-10 bg-gray-900 text-white rounded-full p-2 transition hover:bg-gray-800 hover:scale-105" />
                </Link>
                </div>
               
        </nav>
        {/* Mobile slide-down menu that pushes content */}
        <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-80" : "max-h-0"}`}>
          <div className="border-t border-border px-4 py-4 flex flex-col gap-4 text-lg bg-background">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-primary">Home</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-primary">Projects</Link>
            <Link href="/#story" onClick={() => setOpen(false)} className="hover:text-primary">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 hover:text-primary">
              <MessageSquareText className="h-5 w-5" /> Contact
            </Link>
          </div>
        </div>
        </div>
    )
}