"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Systems Library", href: "/systems" },
    { name: "About Founder", href: "/about" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-full transition-all duration-300 border ${
            scrolled
              ? "backdrop-glass border-line shadow-glass"
              : "bg-paper/95 backdrop-blur-md border-line/60 shadow-sm"
          }`}
        >
          {/* Brand Mark & Solo Practice Status */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-8 h-8 min-w-[32px] min-h-[32px] rounded-lg bg-cloud border border-line flex items-center justify-center p-1 shadow-xs group-hover:border-cobalt transition-colors overflow-hidden">
              <img
                src="/brand/personal-mark-blue.svg"
                alt="Nitin Systems Brand Mark"
                className="brand-logo-img"
                style={{ width: "32px", height: "32px", minWidth: "32px", minHeight: "32px", objectFit: "contain" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-ink text-base tracking-tight leading-none group-hover:text-cobalt transition-colors">
                Nitin Systems
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-soft/80">
                  Operational • Solo Practice
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-cloud/70 p-1 rounded-full border border-line/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-paper text-ink font-semibold shadow-xs"
                      : "text-ink-soft hover:text-ink hover:bg-paper/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="mailto:NitinSystems@outlook.com"
              className="p-2 rounded-full text-ink-soft hover:text-cobalt hover:bg-cloud border border-transparent hover:border-line transition-all"
              title="Email NitinSystems@outlook.com Direct"
            >
              <Mail className="w-4 h-4" />
            </a>

            <Link
              href="/audit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cobalt hover:bg-cobalt-dark text-paper text-xs font-semibold shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>Book System Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-ink-soft hover:text-ink hover:bg-cloud focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-paper border border-line rounded-2xl p-5 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-cloud text-ink font-semibold"
                    : "text-ink-soft hover:bg-cloud/50 hover:text-ink"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-line flex flex-col gap-2">
              <Link
                href="/audit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-cobalt text-paper font-semibold text-sm shadow-sm hover:bg-cobalt-dark transition-colors"
              >
                Book System Audit
              </Link>
              <a
                href="mailto:NitinSystems@outlook.com"
                className="w-full text-center py-2.5 rounded-xl border border-line text-ink-soft hover:text-ink text-xs font-medium flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-cobalt" />
                <span>NitinSystems@outlook.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
