"use client";

import { useState } from "react";
import JuiceModal from "./JuiceModal";
import { juices } from "@/src/data/juices";

export default function JuicesSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section
        id="juices"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-bold">
            Funkcionalni
            <span className="text-green-400">
              {" "}
              sokovi
            </span>
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {juices.map((juice) => (
              <div
                key={juice.id}
                className="rounded-3xl border border-green-900 bg-gradient-to-br from-green-950/50 to-black p-8"
              >
                <h3 className="text-3xl font-bold">
                  {juice.name}
                </h3>

                <p className="mt-4 text-zinc-400">
                  {juice.shortDescription}
                </p>

                <p className="mt-6 text-sm text-zinc-500">
                  {juice.ingredients}
                </p>

                <div className="mt-8 flex gap-3">
                  <button
                    className="rounded-xl bg-green-500 px-4 py-3 font-semibold text-black"
                  >
                    Dodaj u korpu
                  </button>

                  <button
                    onClick={() =>
                      setSelected(juice)
                    }
                    className="rounded-xl border border-zinc-700 px-4 py-3"
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