"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/logo";

export const metadata = {
  title: "Header",
  description: "Header",
  openGraph: {
    title: "Header",
    description: "Header",
  },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" h-16 md:h-20 bg-gradient-to-t from-rose-600 to-red-800 text-white py-4 px-6 md:px-10 flex items-center justify-between relative z-50">
      <Link className="flex items-center gap-2" href="/">
        <Logo />
        <span className="text-xl font-medium">ROAR</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="hover:underline font-medium" href="/">
          Home
        </Link>
        <Link className="hover:underline font-medium" href="/shop">
          Shop
        </Link>
        <Link className="hover:underline font-medium" href="/about">
          About
        </Link>
        <Link className="hover:underline font-medium" href="/contact">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link className="hover:underline" href="/cart">
          <Button className="rounded-full" size="icon" variant="ghost">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
          </Button>
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center py-4 px-6">
          <Link className="flex items-center gap-2" href="/">
            <Logo />
            <span className="text-xl font-medium">ROAR</span>
          </Link>
          <button
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 mt-8">
          <Link className="hover:underline font-medium" href="/" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link className="hover:underline font-medium" href="/shop" onClick={toggleMobileMenu}>
            Shop
          </Link>
          <Link className="hover:underline font-medium" href="/about" onClick={toggleMobileMenu}>
            About
          </Link>
          <Link className="hover:underline font-medium" href="/contact" onClick={toggleMobileMenu}>
            Contact
          </Link>
          <Link className="hover:underline font-medium" href="/terms" onClick={toggleMobileMenu}>
            Terms
          </Link>
          <Link className="hover:underline font-medium" href="/privacy" onClick={toggleMobileMenu}>
            Privacy
          </Link>
          <Link className="hover:underline font-medium" href="/hours" onClick={toggleMobileMenu}>
            Hours
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
