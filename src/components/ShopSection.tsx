"use client";

import { products } from "@/src/data/products";

type Props = {
  addToCart: (product: {
    id: number;
    name: string;
    price: number;
  }) => void;
};

export default function ShopSection({
  addToCart,
}: Props) {
  return (
    <section
      id="shop"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold">
          Shop
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <h3 className="text-2xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-4 text-green-400">
                {product.price} RSD
              </p>

              <button
                onClick={() =>
                  addToCart(product)
                }
                className="mt-6 w-full rounded-xl bg-green-500 py-3 font-semibold text-black"
              >
                Dodaj u korpu
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}