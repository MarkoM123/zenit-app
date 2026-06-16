"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  juice: {
    name: string;
    description: string;
    ingredients: string;
  } | null;
};

export default function JuiceModal({
  open,
  onClose,
  juice,
}: Props) {
  if (!open || !juice) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-zinc-950 p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold text-green-400">
            {juice.name}
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-green-400">
            Sastojci
          </h3>

          <p className="mt-2 text-zinc-300">
            {juice.ingredients}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-green-400">
            Opis
          </h3>

          <p className="mt-2 leading-8 text-zinc-300">
            {juice.description}
          </p>
        </div>
      </div>
    </div>
  );
}