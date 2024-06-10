import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Shop() {
  return (
<div>
<main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">Shop Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Resistance Bands</h3>
                  <p className="text-gray-600 mb-4">$19.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Jump Rope</h3>
                  <p className="text-gray-600 mb-4">$14.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Exercise Ball</h3>
                  <p className="text-gray-600 mb-4">$39.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Resistance Tubes</h3>
                  <p className="text-gray-600 mb-4">$24.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Foam Roller</h3>
                  <p className="text-gray-600 mb-4">$34.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">More Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Resistance Bands</h3>
                  <p className="text-gray-600 mb-4">$19.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Jump Rope</h3>
                  <p className="text-gray-600 mb-4">$14.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Exercise Ball</h3>
                  <p className="text-gray-600 mb-4">$39.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Resistance Tubes</h3>
                  <p className="text-gray-600 mb-4">$24.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  alt="Product"
                  className="w-full h-48 object-cover"
                  height="300"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Foam Roller</h3>
                  <p className="text-gray-600 mb-4">$34.99</p>
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
