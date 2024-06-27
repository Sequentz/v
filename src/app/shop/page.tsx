import Carousel from '../../components/Carousel';
import AddToCart from '../../components/AddToCart';
import ClientComponent from '../../components/ClientComponent';

export const dynamic = 'force-dynamic';

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=18');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

async function fetchCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export const metadata = {
  title: 'Shop',
  description: 'Roar now, miauw later',
  keywords: 'Roar, miauw, later',
};

export default async function Shop() {
  const products = await fetchProducts();
  const categories = await fetchCategories();

  return (
    <div>
      <main className="flex-1">
        <section className="bg-gray-500 py-12 md:py-20 bg-gradient-to-r from-black via-gray-500 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-center font-medium">
              <strong className="text-black z-10">Roar</strong> now,{' '}
              <strong className="text-pink-500 z-10">miauw</strong> later
            </h1>
            <section className="py-12 md:py-20 font-medium">
              <ClientComponent products={products} categories={categories} />
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
