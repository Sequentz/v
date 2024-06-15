import { Button } from "@/components/ui/button"
import { DumbbellIcon, SearchIcon } from "lucide-react"
import Link from "next/link"
import { ShoppingCartIcon } from "lucide-react"
import Logo from "@/components/ui/logo"

const Header = () => {
  return (
    
      <header className="bg-black text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <Logo />
          <span className="text-xl font-medium">ROAR</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 ">
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
          <Button className="rounded-full" size="icon" variant="ghost">
            <SearchIcon className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </header>
      
  )
}
export default Header;


    