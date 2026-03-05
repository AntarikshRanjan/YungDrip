/* =============================================================
   NAVBAR COMPONENT — Sticky Dark Navigation Bar
   =============================================================
   Replicates the YungDrip navbar:
   - Logo centered on desktop
   - Nav links (Collections, MEN, WOMEN, More) on the left
   - Account & Cart icons on the right
   - Mobile hamburger menu with slide-in panel
   - Glassmorphism backdrop on scroll
   ============================================================= */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  /* ---- State ---- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* ---- Scroll handler: add glass effect after scrolling ---- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Toggle mobile menu ---- */
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  /* ---- Nav link data ---- */
  const navLinks = [
    { href: "/", label: "Collections" },
    { href: "/", label: "MEN" },
    { href: "/", label: "WOMEN" },
    { href: "/", label: "More" },
  ];

  return (
    <>
      {/* ===== Main Navbar ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-black"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[70px]">

            {/* -- Left: Desktop Nav Links -- */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white text-sm font-bold uppercase tracking-wide
                             hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* -- Center: Logo / Brand -- */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0
                         md:absolute md:left-1/2 md:-translate-x-1/2"
            >
              <span className="text-white text-2xl font-black uppercase tracking-tight
                               hover:text-accent transition-colors duration-200">
                YUNG DRIP
              </span>
            </Link>

            {/* -- Right: Icons (Account + Cart) -- */}
            <div className="hidden md:flex items-center gap-4">
              {/* Account Icon */}
              <Link
                href="/"
                className="text-white hover:text-accent transition-colors duration-200"
                aria-label="Account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>

              {/* Cart Icon with border box */}
              <Link
                href="/"
                className="flex items-center justify-center w-[50px] h-[50px]
                           border border-white/30 text-white
                           hover:border-accent hover:text-accent
                           transition-all duration-200"
                aria-label="Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </Link>
            </div>

            {/* -- Mobile: Hamburger Button -- */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col
                         items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-6 h-[2px] bg-white transition-all duration-300
                  ${isMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-white transition-all duration-300
                  ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-[2px] bg-white transition-all duration-300
                  ${isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Menu Overlay ===== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm
                         bg-black border-l border-border flex flex-col
                         pt-24 px-8"
            >
              {/* Mobile nav links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-4 text-2xl font-bold uppercase tracking-wide
                               text-white hover:text-accent transition-colors
                               border-b border-border/30"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile icons row */}
              <div className="flex items-center gap-6 mt-8">
                <Link href="/" onClick={closeMenu}
                      className="text-white hover:text-accent transition-colors"
                      aria-label="Account">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </Link>
                <Link href="/" onClick={closeMenu}
                      className="text-white hover:text-accent transition-colors"
                      aria-label="Cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
