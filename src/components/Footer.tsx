import { DumbbellIcon } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/logo";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-6 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Logo />
            <span className="text-lg font-medium">ROAR</span>
          </div>
          <nav className="grid grid-cols-2 gap-4 text-sm md:flex md:flex-row md:items-center md:gap-4">
            <Link className="hover:underline font-medium" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:underline font-medium" href="/terms">
              Terms of Service
            </Link>
            <Link className="hover:underline font-medium" href="/contact">
              Contact Us
            </Link>
            <Link className="hover:underline font-medium" href="/hours">
              Opening Hours
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
