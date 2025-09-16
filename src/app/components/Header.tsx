import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-800 text-white p-4 shadow-md">
      <nav className="max-w-4xl mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">Pizzahuset</Link>
        <div className="space-x-4">
          <Link href="/">Hem</Link>
          <Link href="/menu">Meny</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}
