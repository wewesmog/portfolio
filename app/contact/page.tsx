
import Image from "next/image";
import { Button } from "@/components/ui/button";
import userPic from "@/public/images/userpic.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-center mb-24 mt-10">
            <div className="flex flex-col gap-4 h-full justify-between w-full">
            <p className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-2">Get in <span className="text-primary mb-2">Touch</span></p>
            <p className="text-xl leading-relaxed whitespace-normal break-words">Let's discuss your AI needs and how I can help you bring your ideas to life.</p>

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
            <div className="relative aspect-square w-56 sm:w-72 md:w-96 lg:w-[28rem] shrink-0 rounded-full overflow-hidden ring-4 ring-primary ring-offset-4 ring-offset-background">
  <Image src={userPic} alt="Wes" fill className="object-cover" sizes="(min-width:1280px) 28rem, (min-width:1024px) 24rem, (min-width:768px) 18rem, 14rem" />
</div>
            
        </div>
    )
}
