"use client";

import Link from "next/link";

export default function CartPage() {
    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 1.5rem", textAlign: "center" }}>
                <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    Your Cart
                </p>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                    Cart
                </h1>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#c9a84c", margin: "0 auto 3rem" }} />

                {/* Empty Cart State */}
                <div
                    style={{
                        border: "1px solid #1a1a1a",
                        padding: "4rem 2rem",
                        textAlign: "center",
                        maxWidth: "480px",
                        margin: "0 auto",
                    }}
                >
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3a3a3a" strokeWidth="1" style={{ margin: "0 auto 1.5rem", display: "block" }}>
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                    <p style={{ color: "#888888", fontSize: "1rem", marginBottom: "2rem" }}>Your cart is empty</p>
                    <Link href="/products" className="btn-primary">Start Shopping</Link>
                </div>
            </div>
        </div>
    );
}
