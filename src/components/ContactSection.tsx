export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-bold">
          Kontaktirajte
          <span className="text-green-400"> nas</span>
        </h2>

        <p className="mt-6 text-lg text-zinc-400">
          Imate pitanje ili želite veću porudžbinu?
          Kontaktirajte nas direktno.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <a
            href="tel:+381644386369"
            className="rounded-3xl border border-green-900 bg-black p-6 transition hover:border-green-600 hover:-translate-y-1"
          >
            <p className="text-3xl">📞</p>

            <h3 className="mt-3 font-semibold">
              Telefon
            </h3>

            <p className="mt-2 text-green-400">
              +381 64 43 86 369
            </p>
          </a>

          <a
            href="https://wa.me/381644386369"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-green-900 bg-black p-6 transition hover:border-green-600 hover:-translate-y-1"
          >
            <p className="text-3xl">💬</p>

            <h3 className="mt-3 font-semibold">
              WhatsApp
            </h3>

            <p className="mt-2 text-green-400">
              Pošalji poruku
            </p>
          </a>

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