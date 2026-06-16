export default function Hero() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <div className="mb-6 inline-block rounded-full border border-green-800 px-4 py-2 text-green-400">
              🌱 Sveže uzgojeno mikrobilje
            </div>

            <h1 className="text-5xl font-bold lg:text-7xl">
              Zenit
            </h1>

            <h2 className="mt-4 text-4xl font-bold text-green-400 lg:text-6xl">
              Mikrobilje nove generacije
            </h2>

            <p className="mt-8 max-w-xl text-lg text-zinc-400">
              Sveže ubrano mikrobilje i funkcionalni sokovi koji unose više
              energije, ukusa i hranljivih materija u svakodnevni život.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#shop"
                className="rounded-xl bg-green-500 px-6 py-4 font-semibold text-black"
              >
                Poruči odmah
              </a>

              <a
                href="#juices"
                className="rounded-xl border border-zinc-700 px-6 py-4"
              >
                Saznaj više
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex h-[400px] w-[400px] items-center justify-center rounded-full border border-green-800 bg-green-950 text-[180px]">
              🌱
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}