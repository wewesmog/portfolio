// hero component

import Image from "next/image";
import { Button } from "./ui/button";
import userPic from "@/public/images/userpic.jpg";

export default function Hero() {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mb-30 mt-10">
            <div className="flex flex-col gap-4 h-full justify-between w-full">
            <h1 className="text-4xl  mb-6 text-gray-400">Jambo, Wes here <span className="text-primary">👋</span></h1>
            <p className="text-8xl font-extrabold mb-4"><span className="text-primary mb-2">AI</span> Agents <br /> Specialist</p>
            <p className="text-xl">I'm a n end to end AI Applications Developer as well as product manager. I marry business needs with advanced AI Solutions.</p>

            <div className="flex gap-2 w-full justify-between mt-10">
                <Button variant="outline">Contact me</Button>
                <Button variant="default">See my work</Button>
               </div>
            </div>
            <Image src={userPic} alt="hero" width={600} height={600} className="rounded-full" />
            
        </div>
    )
}
