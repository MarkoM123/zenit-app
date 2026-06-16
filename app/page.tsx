export default function Home() {
  return (
    <main className="bg-[#07110A] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-green-800 bg-green-950/50 px-4 py-2 text-sm text-green-300">
                🌱 Sveže uzgojeno mikrobilje
              </div>

              <h1 className="mt-8 text-6xl font-bold leading-none md:text-8xl">
                Zenit
                <span className="mt-3 block text-green-400">
                  Mikrobilje nove generacije
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg text-zinc-400">
                Sveže ubrano mikrobilje i funkcionalni sokovi koji unose više
                energije, ukusa i hranljivih materija u svakodnevni život.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-green-500 px-6 py-4 font-semibold text-black transition hover:scale-105">
                  Poruči odmah
                </button>

                <button className="rounded-2xl border border-zinc-700 px-6 py-4 font-semibold">
                  Saznaj više
                </button>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-4xl font-bold text-green-400">4</p>
                  <p className="text-sm text-zinc-500">Vrste mikrobilja</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-green-400">3</p>
                  <p className="text-sm text-zinc-500">Funkcionalna soka</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-green-400">100%</p>
                  <p className="text-sm text-zinc-500">Sveže ubrano</p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-[40px] border border-green-900 bg-gradient-to-br from-green-950 to-black p-10">
                <div className="aspect-square rounded-[30px] bg-gradient-to-br from-green-500/20 to-green-900/20 flex items-center justify-center">
                  <span className="text-8xl">🌱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O MIKROBILJU */}
      <section className="border-t border-zinc-900 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Šta je <span className="text-green-400">mikrobilje?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Mikrobilje predstavlja mlade izdanke biljaka koji se beru u ranoj
            fazi razvoja. Upravo tada sadrže intenzivan ukus, vibrantne boje i
            visok nutritivni potencijal.
          </p>
        </div>
      </section>

      {/* MIKROBILJE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-bold">
            Naše <span className="text-green-400">mikrobilje</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Mikrograšak",
              "Mungo Pasulj",
              "China Rose",
              "Brokoli",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:-translate-y-2"
              >
                <div className="mb-4 text-5xl">🌿</div>

                <h3 className="text-2xl font-semibold">{item}</h3>

                <p className="mt-4 text-zinc-400">
                  Sveže uzgojeno i spremno za svakodnevnu upotrebu.
                </p>

                <p className="mt-6 text-green-400 font-semibold">
                  250 RSD
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOKOVI */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-bold">
            Funkcionalni <span className="text-green-400">sokovi</span>
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {["Glow", "Energy", "Imuno"].map((juice) => (
              <div
                key={juice}
                className="rounded-3xl border border-green-900 bg-gradient-to-br from-green-950/40 to-black p-8"
              >
                <div className="text-5xl">🧃</div>

                <h3 className="mt-6 text-3xl font-bold">{juice}</h3>

                <p className="mt-4 text-zinc-400">
                  Funkcionalni sok kreiran za aktivan stil života.
                </p>

                <p className="mt-6 font-semibold text-green-400">
                  350 RSD
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECEPTI */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-5xl font-bold">
            Recepti
          </h2>

          <div className="mt-12 space-y-4">
            {[
              "Detox salata",
              "Energy smoothie",
              "Brokoli boost",
              "Mungo bowl",
            ].map((recipe) => (
              <details
                key={recipe}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <summary className="cursor-pointer text-xl font-semibold">
                  {recipe}
                </summary>

                <p className="mt-4 text-zinc-400">
                  Ovde će kasnije doći kompletan recept.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[40px] border border-green-900 bg-gradient-to-br from-green-950 to-black p-12 text-center">
            <h2 className="text-5xl font-bold">
              Spremni za porudžbinu?
            </h2>

            <p className="mt-6 text-zinc-400">
              Sveže mikrobilje i funkcionalni sokovi direktno do vas.
            </p>

            <button className="mt-8 rounded-2xl bg-green-500 px-8 py-4 font-semibold text-black">
              Otvori Shop
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}