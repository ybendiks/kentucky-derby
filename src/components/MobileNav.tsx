"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/race", label: "Race" },
  { href: "/betting", label: "Betting" },
  { href: "/history", label: "History" },
  { href: "/attend", label: "Attend" },
  { href: "/louisville", label: "Louisville" },
  { href: "/bourbon", label: "Bourbon" },
  { href: "/culture", label: "Culture" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-derby-gold"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="flex h-5 w-6 flex-col justify-between">
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Overlay backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-in menu panel */}
      <nav
        className={`fixed top-0 right-0 z-40 flex h-full w-full max-w-sm flex-col bg-derby-green-dark transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex h-16 items-center px-6">
          <span className="font-serif text-lg font-bold text-derby-gold">
            Menu
          </span>
        </div>

        <ul className="flex flex-1 flex-col gap-1 px-4 pt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-derby-gold transition-colors hover:bg-white/10 active:bg-white/15"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
