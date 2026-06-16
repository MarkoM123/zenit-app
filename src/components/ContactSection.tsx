export default function ContactSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Kontaktirajte
          <span className="text-green-400">
            {" "}nas
          </span>
        </h2>

        <p className="mt-6 text-lg text-zinc-400">
          Imate pitanje ili želite veću porudžbinu?
          Kontaktirajte nas direktno.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-green-900 bg-black p-6">
            <p className="text-3xl">📞</p>
            <h3 className="mt-3 font-semibold">
              Telefon
            </h3>
            <p className="mt-2 text-zinc-400">
              +381 64 386 36 69
            </p>
          </div>

          <div className="rounded-3xl border border-green-900 bg-black p-6">
            <p className="text-3xl">💬</p>
            <h3 className="mt-3 font-semibold">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/38164386369"
              target="_blank"
              className="mt-2 block text-green-400"
            >
              Pošalji poruku
            </a>
          </div>

          <div className="rounded-3xl border border-green-900 bg-black p-6">
            <p className="text-3xl">📍</p>
            <h3 className="mt-3 font-semibold">
              Lokacija
            </h3>
            <p className="mt-2 text-zinc-400">
              Beograd, Srbija
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}