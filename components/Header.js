"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Impact & Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = ["about", "products", "gallery", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y < 200) setActiveSection("/");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#EAE3D4]/50 shadow-[0_4px_30px_rgba(30,62,52,0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 transition-all duration-500">
          <a href="/" className="shrink-0 group">
            <img
              src="/logo.png"
              alt="Sewasew Logo"
              className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#F6F3EB]/40 p-1.5 rounded-2xl border border-[#EAE3D4]/30">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeSection === link.href
                    ? "text-white bg-forest shadow-md shadow-forest/10"
                    : "text-forest-dark hover:text-ochre hover:bg-ochre/8"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Trigger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300 ${
                scrolled
                  ? "text-forest border-[#EAE3D4] bg-white hover:bg-parchment-card"
                  : "text-white border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              }`}
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#0F201B]/40 backdrop-blur-md transition-opacity duration-500 lg:hidden z-40 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Side Panel Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-parchment shadow-2xl z-50 transform transition-transform duration-500 ease-out lg:hidden border-l border-[#EAE3D4]/50 flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#EAE3D4]/60">
          <span className="font-serif font-bold text-forest text-lg tracking-wide">Sewasew Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-ochre hover:bg-ochre/10 border border-[#EAE3D4] transition-all duration-300"
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="p-6 flex-1 space-y-2 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-5 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeSection === link.href
                  ? "text-white bg-ochre shadow-lg shadow-ochre/30"
                  : "text-forest-dark hover:text-white hover:bg-forest hover:shadow-md hover:shadow-forest/20"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="p-6 border-t border-[#EAE3D4]/60 bg-[#F6F3EB]/50 text-center">
          <p className="text-xs text-gray-500 font-medium font-serif">Handcrafted in Arba Minch, Ethiopia</p>
        </div>
      </div>
    </header>
  );
}

