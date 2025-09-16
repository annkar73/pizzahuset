"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // för att markera aktiv länk

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "/", label: "Hem" },
    { href: "/menu", label: "Meny" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <header className="bg-red-800 text-white shadow-md fixed w-full z-50">
      <nav className="max-w-4xl mx-auto flex justify-between items-center p-4 relative">
        <Link href="/" className="font-bold text-xl">
          Pizzahuset
        </Link>

        {/* Desktop meny */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 ${
                  isActive ? "font-semibold" : ""
                } hover:font-semibold`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobil menyknapp */}
<button
  className="md:hidden text-white text-2xl z-50"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
  {isOpen ? <HiX /> : <HiMenu />}
</button>

        {/* Mobilmeny */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-green-800 text-amber-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-40
            ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl mb-6"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
