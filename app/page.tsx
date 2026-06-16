"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import JuicesSection from "@/src/components/JuicesSection";
import RecipesSection from "@/src/components/RecipesSection";
import ShopSection from "@/src/components/ShopSection";
import Cart from "@/src/components/Cart";
import MicrogreensSection from "@/src/components/MicrogreensSection";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import ContactSection from "@/src/components/ContactSection";
import Footer from "@/src/components/Footer";

import { useCart } from "@/src/hooks/useCart";

export default function Home() {
  const {
    items,
    addToCart,
    removeFromCart,
    total,
  } = useCart();

  const cartCount = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <main
      id="top"
      className="min-h-screen bg-[#07110A] text-white"
    >
      <Navbar cartCount={cartCount} />

      <Hero />

      <MicrogreensSection />

      <JuicesSection
        addToCart={addToCart}
      />

      <RecipesSection />

      <ShopSection
        addToCart={addToCart}
      />

      <ContactSection />

      <Footer />

      <Cart
        items={items}
        total={total}
        removeFromCart={removeFromCart}
      />

      <WhatsAppButton />
    </main>
  );
}