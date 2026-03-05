"use client";

import Link from "next/link";

export default function AccountPage() {
    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem" }}>
                <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    My Account
                </p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                    Account
                </h1>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#c9a84c", marginBottom: "3rem" }} />

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                    {["My Orders", "Wishlist", "Addresses", "Settings"].map((item) => (
                        <div
                            key={item}
                            style={{
                                backgroundColor: "#111111",
                                border: "1px solid #1a1a1a",
                                padding: "2rem 1.5rem",
                            }}
                        >
                            <h2 style={{ color: "#f5f5f0", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{item}</h2>
                            <p style={{ color: "#555555", fontSize: "0.8rem" }}>Coming soon</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <Link href="/products" className="btn-primary">Shop Now</Link>
                </div>
            </div>
        </div>
    );
}
