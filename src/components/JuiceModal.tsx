"use client";

import Image from "next/image";

type Juice = {
  name: string;
  description: string;
  ingredients: string;
  price?: number;
};

type Props = {
  open: boolean;
  onClose: () => void;
  juice: Juice | null;
};

function getImage(name: string) {
  switch (name.toLowerCase()) {
    case "energy":
      return "/images/juices/energy.jpg";

    case "imuno":
      return "/images/juices/imuno.jpg";

    case "beauty":
      return "/images/juices/beauty.jpg";

    default:
      return "/images/juices/energy.jpg";
  }
}

function getAccent(name: string) {
  switch (name.toLowerCase()) {
    case "energy":
      return "text-orange-400";

    case "imuno":
      return "text-red-400";

    case "beauty":
      return "text-green-400";

    default:
      return "text-green-400";
  }
}

export default function JuiceModal({
  open,
  onClose,
  juice,
}: Props) {
  if (!open || !juice) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950">

          <div className="grid lg:grid-cols-2">

            {/* Slika */}
            <div className="relative min-h-[400px]">
              <Image
                src={getImage(juice.name)}
                alt={juice.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Sadržaj */}
            <div className="p-8">

              <div className="flex items-start justify-between">
                <div>
                  <h2
                    className={`text-5xl font-bold ${getAccent(
                      juice.name
                    )}`}
                  >
                    {juice.name}
                  </h2>

                  {juice.price && (
                    <p className="mt-4 text-xl font-semibold text-white">
                      {juice.price} RSD
                    </p>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="text-2xl text-zinc-400"
                >
                  ✕
                </button>
              </div>

              <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-5">
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  SASTAV
                </p>

                <p className="mt-3 text-zinc-300">
                  {juice.ingredients}
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold">
                  O proizvodu
                </h3>

                <p className="mt-4 whitespace-pre-line leading-8 text-zinc-300">
                  {juice.description}
                </p>
              </div>

              <button className="mt-8 rounded-2xl bg-green-500 px-6 py-4 font-semibold text-black">
                Dodaj u korpu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}