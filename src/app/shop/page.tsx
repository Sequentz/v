import Link from "next/link";
import { Button } from "@/components/ui/button";
import Carousel from "react-multi-carousel";

export default async function Shop() {
  const cat = await fetch("http://vack.ddev.site/api/categories");
  const prod = await fetch("http://vack.ddev.site/api/products");

  if (!cat.ok) {
    throw new Error("Failed to fetch data");
  }
  if (!prod.ok) {
    throw new Error("Failed to fetch data");
  }
  const categories = await cat.json();
  const products = await prod.json();
  // console.log(categories)

  return (
    <div>
      <main className="flex-1">
        <section className="bg-gray-500 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              <strong className="text-black">Roar</strong> now, miauw later
            </h1>
            <section className="bg-slate-500 py-12 md:py-20">
              <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  Categorieën/ Dit word een slider
                </h2>

                {categories.data.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categories.data.map((category: any) => (
                      <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Link href="#">
                          
                            <img
                              alt="Apparel"
                              className="w-full h-40 object-cover"
                              height="200"
                              src={category.image}
                              style={{
                                aspectRatio: "300/200",
                                objectFit: "cover",
                              }}
                              width="300"
                            />
                            <div className="p-4">
                              <h3 className="text-lg font-bold mb-2 text-black">{category.category}</h3>
                              <p className="text-gray-600">{category.description}</p>
                            </div>
                          
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
            <section className="bg-slate-500 py-12 md:py-20">
              <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Producten</h2>

                {products.data.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.data.map((product: any) => (
                      <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Link href="#">
                          
                            <img
                              alt={product.product}
                              className="w-full h-40 object-cover"
                              height="200"
                              src={product.image}
                              style={{
                                aspectRatio: "300/200",
                                objectFit: "cover",
                              }}
                              width="300"
                            />
                            <div className="p-4">
                              <h3 className="text-lg font-bold mb-2 text-black">{product.product}</h3>
                              <p className="text-gray-600">{product.description}</p>
                              <p className="text-gray-600">{product.price}</p>
                            </div>
                          
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
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
              {/* Other products */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
