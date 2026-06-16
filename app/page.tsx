"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import JuicesSection from "@/src/components/JuicesSection";
import RecipesSection from "@/src/components/RecipesSection";
import ShopSection from "@/src/components/ShopSection";
import Cart from "@/src/components/Cart";
import MicrogreensSection from "@/src/components/MicrogreensSection";

import { useCart } from "@/src/hooks/useCart";

export default function Home() {
  const {
    items,
    addToCart,
    removeFromCart,
    total,
  } = useCart();

  return (
  <main
    id="top"
    className="min-h-screen bg-[#07110A] text-white"
  >
    <Navbar />

    <Hero />

    <MicrogreensSection />

    <JuicesSection />

    <RecipesSection />

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