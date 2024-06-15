import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default async function Shop() {
  const products = await fetch ("https://fakestoreapi.com/products?limit=9")

  if (!products.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await products.json()

  return (
<div>
<main className="flex-1">
        <section className="bg-gray-500 py-12 md:py-20 bg-gradient-to-r from-black via-gray-500 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center font-medium"><strong className="text-black">Roar</strong> now, <strong className="text-pink-500">miauw</strong> later</h1>
            <section className="py-12 md:py-20 font-medium">
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
                  <h3 className=" font-bold mb-2 text-black text-2xl text-center">Merchandise</h3>

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
                  <h3 className=" font-bold mb-2 text-black text-2xl text-center">Supplements</h3>

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
                  <h3 className=" font-bold mb-2 text-black text-2xl text-center">Snacks</h3>

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
                  <h3 className="font-bold mb-2 text-black text-2xl text-center">Drinks</h3>

                </div>
              </Link>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-6 gap-4 p-4 pt-24">
          {data && data.map(({id, title, price, image}) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-6 relative">
          
                <img className="w-40 h-40 "  src={image} alt={title} />
                <h1 className="pt-2 mb-8 text-sm text-black font-medium">{title}</h1>

                <p className=" text-black absolute bottom-2 font-bold left-2">€{price}</p>
              </div>


        ))}
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
