export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <span className="text-2xl font-bold text-teal-600">
          DevSeed 🌱
        </span>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#services">services</a>
          <a href="#projects">projects</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </div>
      </nav>
    </header>
  );
}
