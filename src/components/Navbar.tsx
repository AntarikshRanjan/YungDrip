"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { label: "Shop", href: "/products" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                backgroundColor: "rgba(10,10,10,0.95)",
                borderBottom: "1px solid #1a1a1a",
                backdropFilter: "blur(10px)",
            }}
        >
            <nav
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="yd-logo"
                    style={{
                        fontSize: "1.5rem",
                        color: "#f5f5f0",
                        textDecoration: "none",
                        letterSpacing: "-0.03em",
                    }}
                >
                    <span style={{ color: "#c9a84c" }}>Y</span>D
                </Link>

                {/* Desktop Nav Links */}
                <ul
                    style={{
                        display: "flex",
                        gap: "2.5rem",
                        listStyle: "none",
                        alignItems: "center",
                    }}
                    className="hidden md:flex"
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                style={{
                                    color: "#888888",
                                    textDecoration: "none",
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    transition: "color 0.2s ease",
                                }}
                                className="hover-gold"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side Actions */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {/* Cart */}
                    <Link
                        href="/cart"
                        style={{
                            color: "#f5f5f0",
                            textDecoration: "none",
                            fontSize: "1.2rem",
                            position: "relative",
                        }}
                        aria-label="Cart"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                    </Link>

                    {/* Account */}
                    <Link
                        href="/account"
                        style={{
                            color: "#f5f5f0",
                            textDecoration: "none",
                            fontSize: "1.2rem",
                        }}
                        aria-label="Account"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: "none",
                            border: "none",
                            color: "#f5f5f0",
                            cursor: "pointer",
                            padding: "4px",
                            display: "flex",
                            alignItems: "center",
                        }}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <>
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div
                    style={{
                        backgroundColor: "#0a0a0a",
                        borderTop: "1px solid #1a1a1a",
                        padding: "1rem 1.5rem",
                    }}
                    className="md:hidden"
                >
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        color: "#888888",
                                        textDecoration: "none",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
