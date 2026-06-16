"use client";

import { createWhatsAppMessage } from "@/src/lib/whatsapp";

type Props = {
  items: any[];
  total: number;
  removeFromCart: (id: number) => void;
};

export default function Cart({
  items,
  total,
  removeFromCart,
}: Props) {
  return (
    <div className="fixed bottom-6 right-6 w-80 rounded-3xl border border-zinc-800 bg-black p-6 shadow-2xl">
      <h3 className="text-xl font-bold">
        Korpa
      </h3>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <span>
              {item.name} x{item.quantity}
            </span>

            <button
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-zinc-800 pt-4">
        Ukupno: {total} RSD
      </div>

      {items.length > 0 && (
        <a
          href={createWhatsAppMessage(items)}
          target="_blank"
          className="mt-4 block rounded-xl bg-green-500 py-3 text-center font-semibold text-black"
        >
          Pošalji porudžbinu
        </a>
      )}
    </div>
  );
}