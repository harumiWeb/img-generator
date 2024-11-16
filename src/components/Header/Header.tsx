import Navi from "../Navi/Navi";

export default function Header() {
  return (
    <header className="text-xs py-2 px-4 text-gray-200 bg-gray-700">
    <nav className="flex justify-between gap-4">
      <a href="/" className="flex items-center gap-2 relative link-hover">
        <img src="/logo.svg" alt="ImageX" className="w-8 h-auto" />
        IMAGEX
      </a>
      <Navi />
    </nav>
  </header>
  );
}
