"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Notify", href: "#notify" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#FDFCF8]/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-full px-2 py-1 transition-colors hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#85C346]/40"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo-nav.svg" alt="KLTEN Agri" width={56} height={56} priority />
          <span className="text-lg font-semibold tracking-wide text-[#004924]">
            KLTEN Agri
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded text-sm font-medium text-[#004924]/80 transition-colors hover:text-[#004924] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#85C346]/40"
              >
                <span className="relative">
                  {link.label}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#E0A227] transition-all duration-200 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+918086858617"
              className="text-sm text-[#004924]/80 transition-colors hover:text-[#004924]"
              aria-label="Call KLTEN Agri"
            >
              +91 80 86 85 86 17
            </a>
            <a
              href="mailto:kltenagri@gmail.com"
              className="rounded-full bg-[#004924] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#00663A] active:scale-[0.98]"
              aria-label="Email KLTEN Agri"
            >
              Email Us
            </a>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/60 px-4 py-2 text-sm font-medium text-[#004924] shadow-sm transition-colors hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#85C346]/40 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <div className="rounded-3xl border border-stone-200 bg-white/70 backdrop-blur-sm p-4 shadow-sm">
            <div className="grid gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#004924] transition-colors hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#85C346]/40"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 grid gap-2 border-t border-stone-200 pt-4">
              <a
                href="tel:+918086858617"
                className="rounded-2xl px-4 py-3 text-sm text-[#004924]/80 transition-colors hover:bg-white/80"
                onClick={() => setOpen(false)}
              >
                Call: +91 80 86 85 86 17
              </a>
              <a
                href="mailto:kltenagri@gmail.com"
                className="rounded-2xl bg-[#004924] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#00663A]"
                onClick={() => setOpen(false)}
              >
                Email: kltenagri@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

