"use client";

import { useState } from "react";
import Carousell from "./Carousel";
import AddToCart from "./AddToCart";

const ClientSideComponent = ({ products, categories }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategorySelect = (category) => {
    const filtered = products.filter((product) =>
      product.category.includes(category)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Carousell
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pt-24">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, title, price, image }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-md p-6 relative w-82"
            >
              <img className="w-40 h-40" src={image} alt={title} />
              <h1 className="pt-2 mb-8 text-sm text-black font-medium">
                {title}
              </h1>
              <p className="text-black absolute bottom-2 font-bold left-2">
                €{price}
              </p>
              <AddToCart
                className="absolute bottom-2 right-2"
                product={{ id, title, price, image }}
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-6 text-white">
            Failed to load products.
          </p>
        )}
      </div>
    </div>
  );
};

export default ClientSideComponent;
