"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import ShopSection from "@/src/components/ShopSection";
import Cart from "@/src/components/Cart";

import { useCart } from "@/src/hooks/useCart";

export default function Home() {
  const {
    items,
    addToCart,
    removeFromCart,
    total,
  } = useCart();

  return (
    <main className="bg-[#07110A] text-white">
      <Navbar />
      <Hero />

      {/* ostale sekcije */}

      <ShopSection
        addToCart={addToCart}
      />

      <Cart
        items={items}
        total={total}
        removeFromCart={removeFromCart}
      />
    </main>
  );
}