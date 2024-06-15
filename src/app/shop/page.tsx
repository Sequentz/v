// src/app/shop/page.tsx

import Image from 'next/image';
import AddToCart from '../../components/AddToCart';
import Carousell from '../../components/Carousel';

export default async function Shop() {
  let products = [];
  let categories = [];

  try {
    const productsRes = await fetch('https://fakestoreapi.com/products?limit=18');
    const categoriesRes = await fetch('https://fakestoreapi.com/products/categories');

    if (!productsRes.ok || !categoriesRes.ok) {
      throw new Error('Failed to fetch data');
    }

    products = await productsRes.json();
    categories = await categoriesRes.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <main className="flex-1">
        <section className="bg-gray-500 py-12 md:py-20 bg-gradient-to-r from-black via-gray-500 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold  text-center font-medium">
              <strong className="text-black z-10">Roar</strong> now,{' '}
              <strong className="text-pink-500 z-10">miauw</strong> later
            </h1>
            {/* <div className='flex justify-center absolute top-40 left-1/2 transform -translate-x-1/2'><img src="/lionn.png" alt="Lion scar" className='w-28 opacity-50' /></div> */}
            <section className="py-12 md:py-20 font-medium">
              <Carousell />
            </section>
            <div className="grid grid-cols-6 gap-4 p-4 pt-24">
              {products.length > 0 ? (
                products.map(({ id, title, price, image }) => (
                  <div key={id} className="bg-white rounded-lg shadow-md p-6 relative w-82">
                    <img className="w-40 h-40" src={image} alt={title} />
                    <h1 className="pt-2 mb-8 text-sm text-black font-medium">{title}</h1>
                    <p className="text-black absolute bottom-2 font-bold left-2">€{price}</p>
                    <AddToCart className="absolute bottom-2 right-2" product={{ id, title, price, image }} />
                  </div>
                ))
              ) : (
                <p className="text-center col-span-6 text-white">Failed to load products.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
