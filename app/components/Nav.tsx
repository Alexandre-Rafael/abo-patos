"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Cursos", href: "#cursos" },
  { label: "Equipe", href: "#diretoria" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: "var(--abo-surface-nav)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(10,27,45,0.06), 0 4px 24px rgba(10,27,45,0.06)"
            : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo-abo.png"
              alt="ABO Patos de Minas"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Links centrais — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-body text-sm font-medium transition-colors duration-150"
                style={{ color: "var(--abo-ink-body)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — desktop */}
          <a
            href="https://wa.me/5534997890123"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-badge text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px"
            style={{
              backgroundColor: "var(--abo-accent)",
              boxShadow: "0 2px 12px rgba(1,55,117,0.28)",
            }}
          >
            <Phone size={14} />
            Falar com a ABO
          </a>

          {/* Hamburguer — mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-subtle"
            style={{ color: "var(--abo-ink-body)" }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute top-[72px] left-0 right-0 p-6 flex flex-col gap-4"
            style={{ backgroundColor: "var(--abo-surface-nav)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-body text-base font-medium py-2 border-b transition-colors"
                style={{
                  color: "var(--abo-ink-body)",
                  borderColor: "rgba(10,27,45,0.06)",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5534997890123"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-badge text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--abo-accent)" }}
            >
              <Phone size={14} />
              Falar com a ABO
            </a>
          </div>
        </div>
      )}
    </>
  );
}
