export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-950/50 bg-[#07110A]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        <a
          href="#top"
          className="text-3xl font-bold tracking-tight text-green-400 transition hover:text-green-300"
        >
          ZENIT
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#microgreens"
            className="text-zinc-300 transition hover:text-green-400"
          >
            Mikrobilje
          </a>

          <a
            href="#juices"
            className="text-zinc-300 transition hover:text-green-400"
          >
            Sokovi
          </a>

          <a
            href="#recipes"
            className="text-zinc-300 transition hover:text-green-400"
          >
            Recepti
          </a>

          <a
            href="#shop"
            className="text-zinc-300 transition hover:text-green-400"
          >
            Shop
          </a>
        </nav>

        <a
          href="https://wa.me/38164386369"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition duration-200 hover:scale-105 hover:bg-green-400"
        >
          📱 Poruči
        </a>
      </div>
    </header>
  );
}