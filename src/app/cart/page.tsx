import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black via-gray-500 to-black overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-medium text-center md:text-left">Your Cart</h2>
        <div className="rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <img
                alt="Product"
                className="w-full h-32 object-cover mb-4"
                src="/slide.png"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
              />
              <h3 className="text-lg font-bold mb-2 font-medium text-black">Protein Bars</h3>
              <p className="text-black font-medium mb-4">$24.99</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="cart">
                    -
                  </Button>
                  <span className="text-black font-medium">1</span>
                  <Button size="sm" variant="cart">
                    +
                  </Button>
                </div>
                <Button size="sm" variant="remove">Remove</Button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <img
                alt="Product"
                className="w-full h-32 object-cover mb-4"
                src="/slide.png"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
              />
              <h3 className="text-lg font-bold mb-2 font-medium text-black">Fitness Apparel</h3>
              <p className="text-black font-medium mb-4">$39.99</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="cart">
                    -
                  </Button>
                  <span className="text-black font-medium">1</span>
                  <Button size="sm" variant="cart">
                    +
                  </Button>
                </div>
                <Button size="sm" variant="remove">Remove</Button>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <img
                alt="Product"
                className="w-full h-32 object-cover mb-4"
                src="/slide.png"
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
              />
              <h3 className="text-lg font-bold mb-2 font-medium text-black">Resistance Bands</h3>
              <p className="text-black font-medium mb-4">$14.99</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="cart">
                    -
                  </Button>
                  <span className="text-black font-medium">1</span>
                  <Button size="sm" variant="cart">
                    +
                  </Button>
                </div>
                <Button size="sm" variant="remove">Remove</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
