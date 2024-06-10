import { Button } from "@/components/ui/button"
import { DumbbellIcon, SearchIcon } from "lucide-react"
import Link from "next/link"
import { ShoppingCartIcon } from "lucide-react"

const Header = () => {
  return (
    
      <header className="bg-gray-900 text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <DumbbellIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Fitness Facility</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:underline" href="#">
            Shop
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="#">
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


    