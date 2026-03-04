import Link from "next/link";
import type { Metadata } from "next";
import { CategoryGrid, FeaturedProducts } from "@/components/HomeInteractive";

export const metadata: Metadata = {
  title: "YungDrip | Streetwear for the Bold",
  description:
    "Shop YungDrip — premium oversized streetwear built for confident, driven youth. Clean YD logo, luxury minimalism, raw street energy.",
};

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a" }}>
      {/* ── Hero Section ── */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        }}
      >
        <div
          style={{
            position: "absolute", top: "10%", right: "5%",
            width: "1px", height: "35%",
            background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "10%", left: "5%",
            width: "1px", height: "25%",
            background: "linear-gradient(to bottom, transparent, #c9a84c, transparent)",
            opacity: 0.3,
          }}
        />

        <div style={{ textAlign: "center", padding: "2rem 1.5rem", maxWidth: "900px" }}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1.5rem" }}>
            New Drop — SS26 Collection
          </p>
          <h1
            className="yd-logo"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)", lineHeight: 0.9, color: "#f5f5f0", marginBottom: "1.5rem" }}
          >
            <span style={{ color: "#c9a84c" }}>Y</span>ung
            <br />
            <span style={{ color: "#c9a84c" }}>D</span>rip
          </h1>
          <p style={{ color: "#888888", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Built for the bold. Rooted in urban culture — where luxury minimalism meets raw street energy.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/products" className="btn-primary">Shop Now</Link>
            <Link href="/collections" className="btn-outline">View Lookbook</Link>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section style={{ maxWidth: "1400px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Shop by category
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em" }}>
            Find Your Fit
          </h2>
          <div className="section-divider" />
        </div>
        <CategoryGrid />
      </section>

      {/* ── Featured Products ── */}
      <section style={{ backgroundColor: "#0f0f0f", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Hand-picked
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em" }}>
                Featured Drops
              </h2>
              <div className="section-divider" />
            </div>
            <Link href="/products" style={{ color: "#c9a84c", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none" }}>
              View All →
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section style={{ padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          The YungDrip Code
        </p>
        <blockquote
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#f5f5f0",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          &ldquo;Dress sharp. Move silent. Let the drip speak.&rdquo;
        </blockquote>
        <Link href="/about" className="btn-outline">Our Story</Link>
      </section>
    </div>
  );
}
