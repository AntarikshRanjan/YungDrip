/* =============================================================
   FOOTER COMPONENT — Dark Streetwear Footer
   =============================================================
   Replicates the YungDrip footer layout:
   - Large brand wordmark at the top
   - Three-column grid: Shop links, Connect (socials), Newsletter
   - Email subscription input with arrow submit
   - Terms & policies link at the bottom
   ============================================================= */

"use client";

import Link from "next/link";

export default function Footer() {
    /* ---- Footer link data ---- */
    const shopLinks = [
        { href: "/", label: "Home" },
        { href: "/", label: "Catalog" },
        { href: "/", label: "Contact" },
    ];

    /* ---- Social media links ---- */
    const socials = [
        {
            label: "Facebook",
            href: "#",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
        },
        {
            label: "Instagram",
            href: "#",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            href: "#",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            label: "Pinterest",
            href: "#",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.15 9.42 7.6 11.18-.1-.94-.2-2.39.04-3.42.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.78c0-1.67.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-.99 4-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.75-2.24 3.75-5.47 0-2.86-2.06-4.86-4.99-4.86-3.4 0-5.39 2.55-5.39 5.18 0 1.03.39 2.13.89 2.73.1.12.11.22.08.34-.09.37-.29 1.19-.33 1.35-.05.22-.18.26-.4.16-1.47-.69-2.39-2.84-2.39-4.57 0-3.73 2.71-7.15 7.81-7.15 4.1 0 7.28 2.92 7.28 6.82 0 4.07-2.57 7.35-6.13 7.35-1.2 0-2.32-.62-2.71-1.36 0 0-.59 2.25-.74 2.8-.27 1.03-1 2.32-1.48 3.11C9.57 23.81 10.76 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="bg-black border-t border-border" role="contentinfo">

            {/* ===== Large Brand Wordmark ===== */}
            <div className="container-custom pt-20 pb-10">
                <h2 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase
                       leading-none tracking-tight text-gradient text-center
                       select-none">
                    YUNG DRIP
                </h2>
                <p className="text-secondary text-center mt-2 text-sm tracking-widest uppercase">
                    For Yung By Yung
                </p>
            </div>

            {/* ===== Footer Grid: Shop / Connect / Newsletter ===== */}
            <div className="container-custom pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* -- Column 1: Shop Links -- */}
                    <div>
                        <h3 className="text-white text-xl font-black uppercase mb-6">
                            Shop
                        </h3>
                        <ul className="space-y-3">
                            {shopLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-secondary hover:text-white transition-colors
                               duration-200 text-sm font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* -- Column 2: Connect (Social Icons) -- */}
                    <div>
                        <h3 className="text-white text-xl font-black uppercase mb-6">
                            Connect
                        </h3>
                        <div className="flex items-center gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-secondary hover:text-accent transition-colors
                             duration-200"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* -- Column 3: Newsletter Signup -- */}
                    <div>
                        <h3 className="text-white text-xl font-black uppercase mb-6">
                            Join our community
                        </h3>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center border-b border-secondary/50
                         focus-within:border-accent transition-colors duration-300"
                        >
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-transparent text-white placeholder-muted py-3
                           text-sm outline-none font-medium"
                                aria-label="Email address for newsletter"
                            />
                            <button
                                type="submit"
                                className="text-secondary hover:text-accent transition-colors
                           duration-200 pl-4 py-3"
                                aria-label="Subscribe to newsletter"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ===== Bottom Bar: Terms ===== */}
            <div className="container-custom py-6 border-t border-border/30">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="text-secondary hover:text-white text-xs transition-colors
                       duration-200 uppercase tracking-wider"
                    >
                        Terms and Policies
                    </Link>
                    <p className="text-muted text-xs">
                        &copy; {new Date().getFullYear()} YUNG DRIP. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
