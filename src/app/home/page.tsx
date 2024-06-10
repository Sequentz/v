import { Button } from "@/components/ui/button"
import  Link  from "next/link"






const Home = () => {
  return (
    <div>
      <main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Elevate Your Fitness Journey</h1>
                <p className="text-gray-600 mb-6">Discover the best fitness products to help you reach your goals.</p>
                <div className="flex gap-4">
                  <Button size="lg">Shop Now</Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div>
                <img
                  alt="Hero"
                  className="rounded-lg object-cover"
                  height="500"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width="500"
                />
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
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
                    <Button size="sm">Add to Cart</Button>
                  </div>
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
                  <h3 className="text-lg font-bold mb-2">Resistance Bands</h3>
                  <p className="text-gray-600 mb-4">Versatile resistance bands for strength training.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$14.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
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
                  <h3 className="text-lg font-bold mb-2">Fitness Accessories</h3>
                  <p className="text-gray-600 mb-4">Enhance your workout with our fitness accessories.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-bold">$9.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Link className="bg-white rounded-lg shadow-md overflow-hidden" href="#">
                <img
                  alt="Apparel"
                  className="w-full h-40 object-cover"
                  height="200"
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
                  src="/placeholder.svg"
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
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Your Cart</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <img
                    alt="Product"
                    className="w-full h-32 object-cover mb-4"
                    height="150"
                    src="/placeholder.svg"
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
                    src="/placeholder.svg"
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
                    src="/placeholder.svg"
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
              <div className="mt-6 flex items-center justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="text-gray-900 font-bold">$79.97</span>
              </div>
              <div className="mt-6 flex justify-end">
                <Button size="lg">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Home