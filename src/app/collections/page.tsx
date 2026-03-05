import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Collections | YungDrip",
    description: "Browse YungDrip seasonal collections — bold drops, limited pieces, and signature looks.",
};

export default function CollectionsPage() {
    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "5rem 1.5rem", textAlign: "center" }}>
                <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    YungDrip
                </p>
                <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                    Collections
                </h1>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#c9a84c", margin: "0 auto 2rem" }} />
                <p style={{ color: "#888888", fontSize: "1rem", maxWidth: "480px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                    Full lookbook dropping soon. Stay locked.
                </p>
                <Link href="/products" className="btn-primary">Shop All Products</Link>
            </div>
        </div>
    );
}
