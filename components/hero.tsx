// hero component
"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import userPic from "@/public/images/userpic.jpg";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mb-24 mt-10">
            <div className="flex flex-col gap-4 h-full justify-between w-full">
            <h1 className="text-4xl  mb-6 text-gray-400">Jambo, Wes here <span className="text-primary">👋</span></h1>
            <p className="font-heading text-8xl font-extrabold mb-2">AI Product <span className="text-primary mb-2">Engineer</span></p>
            <p className="text-xl leading-loose">I design and build AI‑powered products with customer obsession—turning lifecycle insight into experiences that grow revenue and retention end‑to‑end.</p>

            <div className="flex gap-2 w-full justify-between mt-10">
                <Button variant="outline" size="lg" onClick={() => router.push("/contact")}>Let's talk</Button>
                <Button variant="default" size="lg" onClick={() => router.push("/#projects")}>See my work</Button>
               </div>
            </div>
           
            <div className="relative w-150 h-150 shrink-0 rounded-full overflow-hidden ring-4 ring-primary">
  <Image src={userPic} alt="Wes" fill className="object-cover" />
</div>
            
        </div>
    )
}
