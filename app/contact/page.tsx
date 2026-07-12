import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"

import userPic from "@/public/images/userpic.jpg"
import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-3xl gap-8 py-8 md:grid-cols-[1fr_auto] md:items-start">
      <div className="space-y-5">
        <div>
          <h1 className="font-heading text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-2 text-muted-foreground">
            Roles, consulting, or partnerships in customer engagement, lifecycle, and
            AI — let&apos;s talk.
          </p>
        </div>

        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-primary" />
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin className="text-primary" />
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <FaMapMarkerAlt className="text-primary" />
            {site.location}
          </li>
        </ul>

        <Button asChild variant="outline" size="sm">
          <Link href={site.lab.url} target="_blank" rel="noreferrer">
            {site.lab.name} blog & lab
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>

      <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl ring-1 ring-border shadow-sm sm:h-52 sm:w-52 md:mx-0">
        <Image
          src={userPic}
          alt={site.name}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 13rem, 11rem"
        />
      </div>
    </div>
  )
}
