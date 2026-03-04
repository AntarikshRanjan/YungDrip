import Link from "next/link";

const footerLinks = {
    Shop: [
        { label: "All Products", href: "/products" },
        { label: "New Drops", href: "/products?category=new" },
        { label: "Hoodies", href: "/products?category=hoodies" },
        { label: "Tees", href: "/products?category=tees" },
        { label: "Accessories", href: "/products?category=accessories" },
    ],
    Help: [
        { label: "Size Guide", href: "/size-guide" },
        { label: "Shipping Info", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "Track Order", href: "/track-order" },
        { label: "FAQ", href: "/faq" },
    ],
    Brand: [
        { label: "About YD", href: "/about" },
        { label: "Lookbook", href: "/lookbook" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
    ],
};

const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com/yungdrip",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "https://twitter.com/yungdrip",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#0a0a0a",
                borderTop: "1px solid #1a1a1a",
                paddingTop: "4rem",
                paddingBottom: "2rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                }}
            >
                {/* Top Section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "3rem",
                        marginBottom: "3rem",
                    }}
                    className="sm:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Brand */}
                    <div>
                        <p
                            className="yd-logo"
                            style={{
                                fontSize: "2rem",
                                marginBottom: "1rem",
                                color: "#f5f5f0",
                            }}
                        >
                            <span style={{ color: "#c9a84c" }}>Y</span>D
                        </p>
                        <p
                            style={{
                                color: "#888888",
                                fontSize: "0.85rem",
                                lineHeight: "1.7",
                                maxWidth: "220px",
                            }}
                        >
                            Built for the bold. Rooted in urban culture — where luxury minimalism meets raw street energy.
                        </p>
                        {/* Social Links */}
                        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    style={{
                                        color: "#888888",
                                        transition: "color 0.2s ease",
                                    }}
                                    className="hover-gold"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3
                                style={{
                                    color: "#f5f5f0",
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                {title}
                            </h3>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "#888888",
                                                textDecoration: "none",
                                                fontSize: "0.85rem",
                                                transition: "color 0.2s ease",
                                            }}
                                            className="hover-gold"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        borderTop: "1px solid #1a1a1a",
                        paddingTop: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{ color: "#555555", fontSize: "0.75rem" }}>
                        © {new Date().getFullYear()} YungDrip. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                style={{
                                    color: "#555555",
                                    textDecoration: "none",
                                    fontSize: "0.75rem",
                                    transition: "color 0.2s ease",
                                }}
                                className="hover-gold"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
