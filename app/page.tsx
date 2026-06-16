export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            🌱 Sveže uzgojeno mikrobilje
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl">
            Zenit
            <span className="block text-green-600">
              Mikrobilje nove generacije
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            Sveže ubrano mikrobilje i funkcionalni sokovi koji unose više
            energije, ukusa i hranljivih materija u svakodnevni život.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-2xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700">
              Poruči odmah
            </button>

            <button className="rounded-2xl border border-zinc-300 px-6 py-4 font-semibold">
              Saznaj više
            </button>
          </div>
        </div>
      </section>

      {/* MIKROBILJE */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">Mikrobilje</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Mikrograšak</h3>
              <p className="mt-3 text-zinc-600">
                Slatkast ukus i hrskava tekstura.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Mungo Pasulj</h3>
              <p className="mt-3 text-zinc-600">
                Bogat nutritivni profil i osvežavajuć ukus.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">China Rose</h3>
              <p className="mt-3 text-zinc-600">
                Blaga pikantnost za salate i obroke.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Brokoli</h3>
              <p className="mt-3 text-zinc-600">
                Jedno od najpopularnijih mikrobilja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOKOVI */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold">Funkcionalni sokovi</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border p-6">
              <h3 className="text-2xl font-semibold">Glow</h3>
              <p className="mt-3 text-zinc-600">
                Osvežavajući napitak za svakodnevni balans.
              </p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="text-2xl font-semibold">Energy</h3>
              <p className="mt-3 text-zinc-600">
                Prirodna podrška aktivnom danu.
              </p>
            </div>

            <div className="rounded-3xl border p-6">
              <h3 className="text-2xl font-semibold">Imuno</h3>
              <p className="mt-3 text-zinc-600">
                Podrška organizmu kroz pažljivo odabrane sastojke.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}