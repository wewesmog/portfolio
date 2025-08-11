
import Image from "next/image";
import { Button } from "@/components/ui/button";
import userPic from "@/public/images/userpic.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mb-30 mt-10">
            <div className="flex flex-col gap-4 h-full justify-between w-full">
            {/* <h1 className="text-4xl  mb-6 text-gray-400">Jambo, Wes here <span className="text-primary">👋</span></h1> */}
            <p className="text-8xl font-extrabold mb-4">Get in Touch<span className="text-primary mb-2">.</span></p>
            <p className="text-xl">Let's discuss your AI needs and how I can help you bring your ideas to life.</p>

            <div className="flex flex-col gap-2 w-full justify-between mt-10 text-xl">
               <div className="flex gap-2 items-center">
               <FaEnvelope />: <p>wes@wesleymogaka.com</p></div>
               <div className="flex gap-2 items-center">
               <FaPhone />: <p>+254 722 345 678</p></div>
               <div className="flex gap-2 items-center">
               <FaLinkedin />: <p>Wesley Mogaka</p></div>
               <div className="flex gap-2 items-center">
               <FaMapMarkerAlt />: <p>Nairobi, Kenya</p></div>
               </div>
            </div>
            <div className="relative w-150 h-150 shrink-0 rounded-full overflow-hidden ring-4 ring-primary">
            <Image src={userPic} alt="Wes" fill className="object-cover" />
            </div>
        </div>
    )
}
