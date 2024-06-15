// components/AddToCart.jsx
"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white hover:bg-gray-500 hover:shadow-lg py-2 px-4 rounded font-medium text-[12px] absolute bottom-2 right-2  transform active:translate-x-0.5 active:translate-y-0.5 active:scale-95 active:shadow-inner transition-transform duration-150 "
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
