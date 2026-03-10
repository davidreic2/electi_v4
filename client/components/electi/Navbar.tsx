import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "A Electi", href: "/a-electi" },
    { label: "Como trabalhamos", href: "/como-trabalhamos" },
    { label: "Na prática", href: "/na-pratica" },
    { label: "Eventos", href: "/eventos" },
  ];

  return (
    <nav className="w-full px-4 md:px-8 lg:px-[135px] pt-4 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between gap-6 px-6 md:px-8 py-3 rounded-2xl bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.30)]">
        {/* Logo */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6cc4acb852d525cf860937b0c78de0a6a5333fc4?width=138"
          alt="Electi"
          className="h-10 w-auto"
        />

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-poppins text-base whitespace-nowrap transition-colors hover:text-[#EF7933] ${
                link.active ? "text-[#EF7933] font-semibold" : "text-[#9D9D9D] font-normal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden lg:flex items-center justify-center h-12 px-4 rounded-xl bg-[#6750A4] text-white font-medium text-sm whitespace-nowrap hover:bg-[#5B4696] transition-colors">
          Marque uma conversa
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#5B4696]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 mx-2 rounded-2xl bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.20)] p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`font-poppins text-base py-1 border-b border-gray-100 ${
                link.active ? "text-[#EF7933] font-semibold" : "text-[#9D9D9D]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 flex items-center justify-center h-12 px-4 rounded-xl bg-[#6750A4] text-white font-medium text-sm">
            Marque uma conversa
          </button>
        </div>
      )}
    </nav>
  );
}
