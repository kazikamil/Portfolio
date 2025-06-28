import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-10 mt-10 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/kazikamil" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6  " />
            </Link>
            <Link href="https://linkedin.com/in/kamil-kazi-275b57182" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6  " />
            </Link>
            <Link href="mailto:kazi.kamil13@gmail.com">
              <Mail className="w-6 h-6 " />
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center ">© {new Date().getFullYear()}  Kamil Kazi All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

