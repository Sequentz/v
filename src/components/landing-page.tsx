
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Swiper from "swiper/bundle"
import 'swiper/css/bundle';
import SlideInImages from "./SlideInImages";
import Text from "./Text";
import Ratings from "./Ratings";


async function fetchCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();

}

export const metadata = {
  title: 'ROAR .',
  description: 'Welcome to ROAR .',

openGraph: {
  title: "ROAR .",
  description: "Welcome to ROAR .",
},
}

export async function LandingPage() {
  const categories = await fetchCategories();

  return (
    <div className="flex flex-col min-h-[100dvh] font-light">
  <main className="flex-1 relative">
  <div className="relative">
    <img src="/slide.png" alt="banner" className="w-full h-screen object-cover grayscale opacity-50" />
    <section className="absolute inset-0 flex items-center justify-center ">
      <div className="container mx-auto px-4 md:px-6 ">
        <h1 className="sm:text-5xl md:text-5xl lg:text-7xl  font-bold mb-4">
          Welcome to <strong className="text-white font-medium">ROAR .</strong>
        </h1>
        <p className="text-white font-bold mb-6">
          Old School training facility that focuses on quality, not quantity.
        </p>
        <div className="flex gap-4 justify-start">
          <Link href="/shop">
            <Button size="lg" variant="shop" className="font-medium">Shop Now</Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="font-medium text-black">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
  <div className="relative">
  <section className="py-12 md:py-20 font-medium bg-gradient-to-r from-gray-100 to-gray-300 h-full grid grid-cols-2 gap-8">
    <SlideInImages />
    <Text />

  </section>
</div>

  <img src="/dumbell.png" alt="dumbell" className="w-full h-96 object-cover grayscale opacity-50" />
  <section className="py-12 md:py-20 font-medium bg-gradient-to-r from-slate-300 to-slate-500 h-full justify-center items-center">
  
  <Ratings />
   
  </section>
</main>


    </div>
  );
}

function DumbbellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  );
}

function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

export default LandingPage;
