import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface SubLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  sub?: SubLink[];
}

const navItems: NavItem[] = [
  {
    label: "A Electi",
    sub: [
      { label: "Para Escolas", href: "/para-escolas" },
      { label: "Para Redes", href: "/para-redes" },
      { label: "Quem Somos", href: "/quem-somos" },
    ],
  },
  { label: "Como trabalhamos", href: "/como-trabalhamos" },
  { label: "Na prática", href: "/na-pratica" },
];

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const isActive = item.sub?.some(
    (s) => pathname === s.href || pathname.startsWith(s.href + "/")
  );

  const handleEnter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`font-poppins text-sm lg:text-base whitespace-nowrap transition-colors hover:text-[#EF7933] flex items-center gap-1 ${
          isActive ? "text-[#EF7933] font-semibold" : "text-[#9D9D9D] font-normal"
        }`}
      >
        {item.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-white rounded-xl shadow-[0_4px_24px_0_rgba(0,0,0,0.15)] py-2 z-50">
          {item.sub!.map((sub) => (
            <Link
              key={sub.label + sub.href}
              to={sub.href}
              className={`block px-4 py-2 font-poppins text-sm transition-colors hover:bg-gray-50 hover:text-[#EF7933] ${
                pathname === sub.href || pathname.startsWith(sub.href + "/")
                  ? "text-[#EF7933] font-semibold"
                  : "text-[#9D9D9D]"
              }`}
              onClick={() => setOpen(false)}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { pathname } = useLocation();

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Centered container for both bar + mobile panel */}
      <div className="max-w-[900px] mx-auto">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between gap-4 px-5 md:px-8 py-3 rounded-2xl bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.30)]">
          {/* Logo → Home */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/6cc4acb852d525cf860937b0c78de0a6a5333fc4.webp"
              alt="Electi"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navItems.map((item) =>
              item.sub ? (
                <DesktopDropdown key={item.label} item={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`font-poppins text-sm lg:text-base whitespace-nowrap transition-colors hover:text-[#EF7933] ${
                    isLinkActive(item.href!)
                      ? "text-[#EF7933] font-semibold"
                      : "text-[#9D9D9D] font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button (desktop) */}
          <a
            href="https://calendar.app.google/e7uELe74nSB79jrK7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center justify-center h-10 px-3 xl:px-4 rounded-xl bg-[#6750A4] text-white font-medium text-xs xl:text-sm whitespace-nowrap hover:bg-[#5B4696] transition-colors flex-shrink-0"
          >
            Marque uma conversa
          </a>

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

        {/* ── Mobile dropdown panel ── */}
        {mobileOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.20)] p-6 flex flex-col gap-1">
            {navItems.map((item) =>
              item.sub ? (
                <div key={item.label}>
                  <button
                    className={`w-full flex items-center justify-between font-poppins text-base py-3 border-b border-gray-100 ${
                      item.sub.some((s) => isLinkActive(s.href))
                        ? "text-[#EF7933] font-semibold"
                        : "text-[#333]"
                    }`}
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 flex flex-col py-1 border-b border-gray-100">
                      {item.sub.map((sub) => (
                        <Link
                          key={sub.label + sub.href}
                          to={sub.href}
                          className={`font-poppins text-sm py-2.5 ${
                            isLinkActive(sub.href)
                              ? "text-[#EF7933] font-semibold"
                              : "text-[#666]"
                          }`}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileExpanded(null);
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`font-poppins text-base py-3 border-b border-gray-100 ${
                    isLinkActive(item.href!)
                      ? "text-[#EF7933] font-semibold"
                      : "text-[#333]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://calendar.app.google/e7uELe74nSB79jrK7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center h-12 rounded-xl bg-[#6750A4] text-white font-poppins font-medium text-sm hover:bg-[#5B4696] transition-colors"
            >
              Marque uma conversa
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
