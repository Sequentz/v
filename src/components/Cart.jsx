// components/Cart.js
"use client";

import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCart(data);
    };

    fetchCart();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - €{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
