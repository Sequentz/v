import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <div className="container mx-auto px-4 md:px-6 h-screen ">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Your Cart</h2>
      <div className=" rounded-lg  p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-4">
            <img
              alt="Product"
              className="w-full h-32 object-cover mb-4"
              height="150"
              src="/slide.png"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <h3 className="text-lg font-bold mb-2">Protein Bars</h3>
            <p className="text-gray-600 mb-4">$24.99</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  -
                </Button>
                <span>1</span>
                <Button size="sm" variant="outline">
                  +
                </Button>
              </div>
              <Button size="sm">Remove</Button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <img
              alt="Product"
              className="w-full h-32 object-cover mb-4"
              height="150"
              src="/slide.png"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <h3 className="text-lg font-bold mb-2">Fitness Apparel</h3>
            <p className="text-gray-600 mb-4">$39.99</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  -
                </Button>
                <span>1</span>
                <Button size="sm" variant="outline">
                  +
                </Button>
              </div>
              <Button size="sm">Remove</Button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <img
              alt="Product"
              className="w-full h-32 object-cover mb-4"
              height="150"
              src="/slide.png"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <h3 className="text-lg font-bold mb-2">Resistance Bands</h3>
            <p className="text-gray-600 mb-4">$14.99</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  -
                </Button>
                <span>1</span>
                <Button size="sm" variant="outline">
                  +
                </Button>
              </div>
              <Button size="sm">Remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
