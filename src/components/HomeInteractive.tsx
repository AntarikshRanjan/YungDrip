"use client";

import Link from "next/link";

const categories = [
    { name: "Hoodies", href: "/products?category=hoodies", count: "12 styles" },
    { name: "Tees", href: "/products?category=tees", count: "24 styles" },
    { name: "Joggers", href: "/products?category=joggers", count: "8 styles" },
    { name: "Accessories", href: "/products?category=accessories", count: "16 styles" },
];

const featuredProducts = [
    { id: "1", name: "YD Oversized Hoodie", price: 2999, tag: "BESTSELLER", color: "#1a1a1a" },
    { id: "2", name: "YD Clean Logo Tee", price: 1499, tag: "NEW DROP", color: "#2a2a2a" },
    { id: "3", name: "YD Cargo Joggers", price: 2499, tag: "LIMITED", color: "#1a1a1a" },
];

export function CategoryGrid() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {categories.map((cat) => (
                <Link
                    key={cat.name}
                    href={cat.href}
                    style={{ display: "block", backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", padding: "2rem 1.5rem", textDecoration: "none", transition: "border-color 0.2s ease, transform 0.2s ease" }}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "#c9a84c";
                        el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "#2a2a2a";
                        el.style.transform = "translateY(0)";
                    }}
                >
                    <h3 style={{ color: "#f5f5f0", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{cat.name}</h3>
                    <p style={{ color: "#888888", fontSize: "0.8rem" }}>{cat.count}</p>
                    <div style={{ width: "24px", height: "1px", backgroundColor: "#c9a84c", marginTop: "1rem" }} />
                </Link>
            ))}
        </div>
    );
}

export function FeaturedProducts() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {featuredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                    <div
                        style={{ backgroundColor: product.color, border: "1px solid #2a2a2a", overflow: "hidden", transition: "transform 0.3s ease" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.02)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                    >
                        <div
                            style={{
                                height: "360px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
                                position: "relative",
                            }}
                        >
                            <span className="yd-logo" style={{ fontSize: "4rem", color: "#c9a84c", opacity: 0.3 }}>YD</span>
                            <span
                                style={{
                                    position: "absolute",
                                    top: "1rem",
                                    left: "1rem",
                                    backgroundColor: "#c9a84c",
                                    color: "#0a0a0a",
                                    fontSize: "0.65rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.1em",
                                    padding: "0.3rem 0.75rem",
                                }}
                            >
                                {product.tag}
                            </span>
                        </div>
                        <div style={{ padding: "1.25rem" }}>
                            <h3 style={{ color: "#f5f5f0", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{product.name}</h3>
                            <p style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1.1rem" }}>₹{product.price.toLocaleString("en-IN")}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
