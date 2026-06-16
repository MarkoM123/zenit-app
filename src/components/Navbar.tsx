export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#07110A]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-green-400">
          ZENIT
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#microgreens">Mikrobilje</a>
          <a href="#juices">Sokovi</a>
          <a href="#recipes">Recepti</a>
          <a href="#shop">Shop</a>
        </nav>

        <button className="rounded-xl bg-green-500 px-4 py-2 font-semibold text-black">
          Poruči
        </button>
      </div>
    </header>
  );
}