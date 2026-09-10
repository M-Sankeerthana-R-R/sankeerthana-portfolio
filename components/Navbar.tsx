"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, nav } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="mx-auto max-w-(--container-content) px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-tight text-[var(--color-ink)]"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-[var(--color-ink)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 flex flex-col gap-1"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="py-3 text-base text-[var(--color-ink)] border-b border-[var(--color-border)] last:border-none"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
