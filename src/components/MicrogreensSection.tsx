export default function MicrogreensSection() {
  const items = [
    {
      name: "Mikrograšak",
      description:
        "Slatkast ukus i hrskava tekstura. Idealan za salate, sendviče i smutije.",
    },
    {
      name: "Mungo Pasulj",
      description:
        "Bogat nutritivni profil i osvežavajuć ukus za svakodnevnu ishranu.",
    },
    {
      name: "China Rose",
      description:
        "Blago pikantan ukus koji oplemenjuje salate i zdrave obroke.",
    },
    {
      name: "Brokoli",
      description:
        "Jedno od najpopularnijih mikrobilja bogato vrednim fitonutrijentima.",
    },
  ];

  return (
    <section
      id="microgreens"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-5xl font-bold">
          Naše
          <span className="text-green-400">
            {" "}
            mikrobilje
          </span>
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-zinc-400">
          Sveže uzgojeno mikrobilje bogato vitaminima, mineralima i prirodnim
          antioksidansima. Savršen dodatak zdravoj i uravnoteženoj ishrani.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-green-900 bg-gradient-to-br from-green-950/40 to-black p-8"
            >
              <div className="mb-6 text-6xl">
                🌱
              </div>

              <h3 className="text-2xl font-bold">
                {item.name}
              </h3>

              <p className="mt-4 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}