import { Twitter, Instagram, Linkedin, Mail, Phone, Globe, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Newsletter"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <div className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-4 px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-1">Let's work together!</h3>
                  <p className="text-gray-600 text-sm md:text-base">I'm currently available for freelance work.</p>
                </div>

                <div className="w-full md:w-auto">
                  <Button asChild suppressHydrationWarning className="w-full md:w-auto bg-black text-white hover:bg-black/90 rounded-[10px] px-8 md:px-10 py-6 text-base md:text-lg font-semibold h-14 md:h-16 flex items-center gap-3">
                    <a href="mailto:mohamedamaan319@gmail.com">
                      <Mail className="w-5 h-5" />
                      Contact me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/footer-logo.jpeg"
                    alt="Mohammed Amaan Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Mohammed Amaan</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Full-stack developer building production-ready applications. Let's build something amazing together.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/_mohamed_amaan_/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamedamaan319/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/modamaan_"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://medium.com/@amaancr7777"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <BookOpen className="w-5 h-5 text-black" />
                </a>
                <a
                  href="https://devblog.blog"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#00BA7C] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Globe className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>



            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:mohamedamaan319@gmail.com" className="hover:text-white transition-colors">
                    mohamedamaan319@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/917025520084" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +91 7025520084
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>Made by Mohammed Amaan</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
