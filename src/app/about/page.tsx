import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | YungDrip",
    description: "The story behind YungDrip — bold streetwear built for confident, driven youth.",
};

export default function AboutPage() {
    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem" }}>
                <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    Our Story
                </p>
                <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                    About YD
                </h1>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#c9a84c", marginBottom: "2.5rem" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                        "YungDrip was born on the streets — not in a boardroom. We didn't follow the rules of fashion. We wrote our own.",
                        "Every piece is designed for the confident and the driven. Luxury minimalism with raw street energy. Oversized fits, clean YD logos, and statement pieces that turn heads without asking for attention.",
                        "We're not just a brand. We're a statement. Dress sharp. Move silent. Let the drip speak.",
                    ].map((text, i) => (
                        <p key={i} style={{ color: i === 0 ? "#f5f5f0" : "#888888", fontSize: "1.1rem", lineHeight: 1.8 }}>
                            {text}
                        </p>
                    ))}
                </div>

                <div style={{ marginTop: "3rem" }}>
                    <Link href="/products" className="btn-primary">Shop the Collection</Link>
                </div>
            </div>
        </div>
    );
}
