"use client";

import Link from "next/link";

const categories = ["All", "Hoodies", "Tees", "Joggers", "Caps", "Accessories"];

const products = [
    { id: "1", name: "YD Oversized Hoodie", price: 2999, category: "hoodies", tag: "BESTSELLER" },
    { id: "2", name: "YD Clean Logo Tee", price: 1499, category: "tees", tag: "NEW" },
    { id: "3", name: "YD Cargo Joggers", price: 2499, category: "joggers", tag: "LIMITED" },
    { id: "4", name: "YD Five Panel Cap", price: 899, category: "caps", tag: null },
    { id: "5", name: "YD Crossbody Bag", price: 1999, category: "accessories", tag: "NEW" },
    { id: "6", name: "YD Heavyweight Tee", price: 1699, category: "tees", tag: null },
];

export default function ProductsGrid() {
    return (
        <>
            {/* Category Filter */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                {categories.map((cat, i) => (
                    <button
                        key={cat}
                        style={{
                            backgroundColor: i === 0 ? "#c9a84c" : "transparent",
                            color: i === 0 ? "#0a0a0a" : "#888888",
                            border: `1px solid ${i === 0 ? "#c9a84c" : "#2a2a2a"}`,
                            padding: "0.5rem 1.25rem",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            if (i !== 0) { el.style.borderColor = "#c9a84c"; el.style.color = "#c9a84c"; }
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            if (i !== 0) { el.style.borderColor = "#2a2a2a"; el.style.color = "#888888"; }
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "1.5rem",
                }}
            >
                {products.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                        <article
                            style={{
                                backgroundColor: "#111111",
                                border: "1px solid #1a1a1a",
                                overflow: "hidden",
                                transition: "border-color 0.2s ease, transform 0.2s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = "#c9a84c";
                                el.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = "#1a1a1a";
                                el.style.transform = "translateY(0)";
                            }}
                        >
                            <div
                                style={{
                                    height: "320px",
                                    background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                }}
                            >
                                <span className="yd-logo" style={{ fontSize: "3.5rem", color: "#c9a84c", opacity: 0.2 }}>
                                    YD
                                </span>
                                {product.tag && (
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "0.75rem",
                                            left: "0.75rem",
                                            backgroundColor: "#c9a84c",
                                            color: "#0a0a0a",
                                            fontSize: "0.6rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.1em",
                                            padding: "0.25rem 0.6rem",
                                        }}
                                    >
                                        {product.tag}
                                    </span>
                                )}
                            </div>
                            <div style={{ padding: "1.25rem" }}>
                                <p style={{ color: "#555555", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                                    {product.category}
                                </p>
                                <h2 style={{ color: "#f5f5f0", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                                    {product.name}
                                </h2>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <p style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1rem" }}>
                                        ₹{product.price.toLocaleString("en-IN")}
                                    </p>
                                    <span style={{ color: "#555555", fontSize: "0.75rem" }}>→</span>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </>
    );
}
