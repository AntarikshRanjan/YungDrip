"use client";

interface Product {
    id: string;
    name: string;
    price: number;
    compareAtPrice: number;
    description: string;
    sizes: string[];
    colors: string[];
    category: string;
    sku: string;
    stock: number;
    tag: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
    const discount = Math.round(
        ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
    );

    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "3rem 1.5rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "3rem",
                }}
            >
                {/* Left — Images */}
                <div>
                    <div
                        style={{
                            aspectRatio: "4/5",
                            backgroundColor: "#111111",
                            border: "1px solid #1a1a1a",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "0.75rem",
                            position: "relative",
                        }}
                    >
                        <span className="yd-logo" style={{ fontSize: "8rem", color: "#c9a84c", opacity: 0.5 }}>YD</span>
                        {product.tag && (
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
                        )}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                style={{
                                    width: "80px",
                                    aspectRatio: "1",
                                    backgroundColor: "#111111",
                                    border: `1px solid ${i === 1 ? "#c9a84c" : "#1a1a1a"}`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}
                            >
                                <span className="yd-logo" style={{ fontSize: "1rem", color: "#c9a84c", opacity: 0.2 }}>YD</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Product Info */}
                <div style={{ paddingTop: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                        <p style={{ color: "#888888", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                            {product.category}
                        </p>
                        <p style={{ color: "#3a3a3a", fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                            SKU: {product.sku}
                        </p>
                    </div>
                    <h1
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}
                    >
                        {product.name}
                    </h1>

                    {/* Price */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                        <p style={{ color: "#c9a84c", fontWeight: 800, fontSize: "1.75rem" }}>
                            ₹{product.price.toLocaleString("en-IN")}
                        </p>
                        <p style={{ color: "#555555", fontSize: "1rem", textDecoration: "line-through" }}>
                            ₹{product.compareAtPrice.toLocaleString("en-IN")}
                        </p>
                        <span style={{ backgroundColor: "#1a2a1a", color: "#4ade80", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.6rem" }}>
                            -{discount}% OFF
                        </span>
                    </div>

                    {/* Color */}
                    <div style={{ marginBottom: "1.75rem" }}>
                        <p style={{ color: "#888888", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Color</p>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            {product.colors.map((color, i) => (
                                <button
                                    key={color}
                                    style={{
                                        padding: "0.5rem 1rem",
                                        fontSize: "0.8rem",
                                        fontWeight: 500,
                                        border: `1px solid ${i === 0 ? "#c9a84c" : "#2a2a2a"}`,
                                        color: i === 0 ? "#c9a84c" : "#888888",
                                        backgroundColor: "transparent",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div style={{ marginBottom: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                            <p style={{ color: "#888888", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Size</p>
                            <button style={{ color: "#c9a84c", fontSize: "0.75rem", background: "none", border: "none", cursor: "pointer" }}>Size Guide</button>
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        fontSize: "0.85rem",
                                        fontWeight: 700,
                                        border: "1px solid #2a2a2a",
                                        color: "#888888",
                                        backgroundColor: "transparent",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#c9a84c";
                                        (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a";
                                        (e.currentTarget as HTMLElement).style.color = "#888888";
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
                        <button className="btn-primary" style={{ flex: 1, fontSize: "0.85rem" }}>Add to Cart</button>
                        <button
                            style={{ width: "52px", height: "52px", border: "1px solid #2a2a2a", backgroundColor: "transparent", color: "#888888", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                            aria-label="Add to wishlist"
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#c9a84c")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2a2a2a")}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </button>
                    </div>

                    {/* Description */}
                    <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "1.5rem" }}>
                        <h3 style={{ color: "#f5f5f0", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                            About This Piece
                        </h3>
                        <p style={{ color: "#888888", fontSize: "0.9rem", lineHeight: 1.8 }}>{product.description}</p>
                    </div>
                    <p style={{ color: "#4ade80", fontSize: "0.75rem", marginTop: "1rem" }}>
                        ✓ {product.stock} units in stock — order now
                    </p>
                </div>
            </div>
        </div>
    );
}
