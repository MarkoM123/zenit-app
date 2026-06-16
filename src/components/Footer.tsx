export default function Footer() {
  return (
    <footer className="border-t border-green-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-3xl font-bold text-green-400">
          ZENIT
        </h3>

        <p className="mt-4 max-w-xl text-zinc-400">
          Sveže uzgojeno mikrobilje i funkcionalni sokovi za zdraviji način života.
        </p>

        <div className="mt-8 space-y-2 text-zinc-400">
          <p>📞 +381 64 386 36 69</p>
          <p>📍 Beograd, Srbija</p>
        </div>

        <p className="mt-10 text-sm text-zinc-600">
          © 2026 Zenit. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}