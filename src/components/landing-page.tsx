/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/vv4HazoSKR9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Chivo } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these fonts, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function LandingPage() {
// const categories = await fetch("http://vack.ddev.site/api/categories")
// const products = await fetch("http://vack.ddev.site/api/products")

// if (!categories.ok) {
//   throw new Error("Failed to fetch data")
// }
// if (!products.ok) {
//   throw new Error("Failed to fetch data")
// }
// const category = await categories.json()
// const product = await products.json()

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className=" relative bg-gradient-to-r from-black via-gray-500 to-black py-12 md:py-20">
        
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Welcome to <strong className="text-black">ROAR .</strong>
                </h1>
                <p className="text-gray-500 mb-6">
                  Old School training facility that focuses on quality, not quantity.
                </p>
                <div className="flex gap-4">
                  <Link href="/shop">
                    <Button size="lg">Shop Now</Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                  {/* Carousel wrapper */}
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                        alt="Slide 1"
                      />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="Slide 2"
                      />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="Slide 3"
                      />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img
                        src="/shake.png"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="Slide 4"
                      />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                      <img
                        src="/slide.png"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="Slide 5"
                      />
                    </div>
                  </div>
                  {/* Slider indicators */}
                  <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="true"
                      aria-label="Slide 1"
                      data-carousel-slide-to="0"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to="1"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to="2"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 4"
                      data-carousel-slide-to="3"
                    ></button>
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 5"
                      data-carousel-slide-to="4"
                    ></button>
                  </div>
                  {/* Slider controls */}
                  <button
                    type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Protein Bars</h3>
                  <p className="text-gray-600 mb-4">High-quality protein bars to fuel your workouts.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$24.99</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Fitness Apparel</h3>
                  <p className="text-gray-600 mb-4">Comfortable and stylish workout clothes.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$39.99</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Resistance Bands</h3>
                  <p className="text-gray-600 mb-4">Versatile resistance bands for strength training.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$14.99</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Fitness Accessories</h3>
                  <p className="text-gray-600 mb-4">Enhance your workout with our fitness accessories.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$9.99</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-black via-gray-500 to-black py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
            {/* {categories && categories.data.map((category) => (
              <Link
                className="bg-white rounded-lg shadow-md overflow-hidden"
                href={`/category/${category.slug}`}
                key={category.id}
              >
                <img
                  alt="Category"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{category.category}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))} */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Apparel"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Apparel</h3>
                  <p className="text-gray-600">Discover our collection of fitness apparel.</p>
                </div>
              </Link>
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Supplements"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Supplements</h3>
                  <p className="text-gray-600">Explore our selection of high-quality supplements.</p>
                </div>
              </Link>
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Accessories"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Accessories</h3>
                  <p className="text-gray-600">Find the perfect fitness accessories to enhance your workouts.</p>
                </div>
              </Link>
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Equipment"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/slide.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Equipment</h3>
                  <p className="text-gray-600">Browse our selection of high-quality fitness equipment.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}

function DumbbellIcon(props) {
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

function SearchIcon(props) {
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

function ShoppingCartIcon(props) {
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
