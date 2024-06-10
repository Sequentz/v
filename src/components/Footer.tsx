import { DumbbellIcon } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/ui/logo"

const Footer = () => {
  return (
    <div><footer className="bg-gray-900 text-white py-6 px-4 md:px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="text-lg font-bold">ROAR</span>
      </div>
      <nav className="flex items-center gap-4 mt-4 md:mt-0">
        <Link className="hover:underline" href="#">
          Privacy Policy
        </Link>
        <Link className="hover:underline" href="#">
          Terms of Service
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact Us
        </Link>
      </nav>
    </div>
  </footer></div>
  )
}
export default Footer