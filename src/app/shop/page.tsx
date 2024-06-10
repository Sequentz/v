import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Shop() {
  return (
<div>
<main className="flex-1">
        <section className="bg-gray-500 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Roar now, miauw later</h1>
            <section className="bg-gray-500 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Categoriën/ Dit word een slider</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Apparel"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/merch.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Merchandise</h3>
                  <p className="text-gray-600">Discover our collection of fitness apparel.</p>
                </div>
              </Link>
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Supplements"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/shake.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Supplements</h3>
                  <p className="text-gray-600">Explore our selection of high-quality supplements.</p>
                </div>
              </Link>
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Accessories"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/bars.jpeg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Snacks</h3>
                  <p className="text-gray-600">Find the perfect fitness accessories to enhance your workouts.</p>
                </div>
              </Link>
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Equipment"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/drinkz.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Drinks</h3>
                  <p className="text-gray-600">Browse our selection of high-quality fitness equipment.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black ">FulFilled Salted Peanut</h3>
                  <p className="text-gray-600 mb-4">High-quality protein bar to fuel your workouts.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$3.50</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black ">Monster White</h3>
                  <p className="text-gray-600 mb-4">Lekkere Monster zonder suiker</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$2.50</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black ">ROAR T-shirt</h3>
                  <p className="text-gray-600 mb-4">High-quality protein bars to fuel your workouts.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$24.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Kettlebell</h3>
                  <p className="text-gray-600 mb-4">$59.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Jump Rope</h3>
                  <p className="text-gray-600 mb-4">$14.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Exercise Ball</h3>
                  <p className="text-gray-600 mb-4">$39.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Resistance Tubes</h3>
                  <p className="text-gray-600 mb-4">$24.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-black">Foam Roller</h3>
                  <p className="text-gray-600 mb-4">$34.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-500 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">Popular products/ dit word een slider</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
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
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Yoga Mat</h3>
                  <p className="text-gray-600 mb-4">$29.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Dumbbells</h3>
                  <p className="text-gray-600 mb-4">$49.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/test.jpeg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Kettlebell</h3>
                  <p className="text-gray-600 mb-4">$59.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>
</div>
  );
}
