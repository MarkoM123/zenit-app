"use client";

import { useState } from "react";
import JuiceModal from "./JuiceModal";
import { juices } from "@/src/data/juices";

export default function JuicesSection() {
  const [selected, setSelected] = useState<(typeof juices)[0] | null>(null);

  return (
    <>
      <section id="juices" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-bold">
            Funkcionalni{" "}
            <span className="text-green-400">
              sokovi
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Hladno ceđeni sokovi obogaćeni mikrobiljem za svakodnevnu podršku
            aktivnom i zdravom načinu života.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {juices.map((juice) => (
              <div
                key={juice.id}
                className="group rounded-3xl border border-green-900 bg-gradient-to-br from-green-950/50 to-black p-8 transition duration-300 hover:-translate-y-1 hover:border-green-700"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-bold">
                    {juice.name}
                  </h3>

                  <span className="rounded-full border border-green-900 px-3 py-1 text-sm text-green-400">
                    {juice.price} RSD
                  </span>
                </div>

                <p className="mt-4 text-zinc-400">
                  {juice.shortDescription}
                </p>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    Sastav
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
                    {juice.ingredients}
                  </p>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    className="flex-1 rounded-xl bg-green-500 px-4 py-3 font-semibold text-black transition hover:bg-green-400"
                  >
                    Dodaj u korpu
                  </button>

                  <button
                    onClick={() => setSelected(juice)}
                    className="rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-green-700"
                  >
                    Više detalja
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JuiceModal
        open={!!selected}
        juice={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}