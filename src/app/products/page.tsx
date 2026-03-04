import type { Metadata } from "next";
import ProductsGrid from "@/components/ProductsGrid";

export const metadata: Metadata = {
    title: "Shop All",
    description: "Browse the full YungDrip collection — hoodies, tees, joggers, caps, and accessories.",
};

export default function ProductsPage() {
    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            {/* Page Header */}
            <div
                style={{
                    borderBottom: "1px solid #1a1a1a",
                    padding: "3rem 1.5rem",
                    background: "linear-gradient(to bottom, #0f0f0f, #0a0a0a)",
                }}
            >
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                        The Full Collection
                    </p>
                    <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em" }}>
                        All Products
                    </h1>
                    <div className="section-divider" />
                </div>
            </div>

            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem 1.5rem" }}>
                <ProductsGrid />
            </div>
        </div>
    );
}
