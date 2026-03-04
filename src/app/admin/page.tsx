"use client";

const stats = [
    { label: "Total Products", value: "—", icon: "📦" },
    { label: "Total Orders", value: "—", icon: "🛒" },
    { label: "Registered Users", value: "—", icon: "👤" },
    { label: "Revenue", value: "—", icon: "💰" },
];

const adminLinks = [
    { label: "Products", href: "/admin/products", desc: "Add, edit, remove products" },
    { label: "Orders", href: "/admin/orders", desc: "Manage and update order status" },
    { label: "Users", href: "/admin/users", desc: "View customer accounts" },
    { label: "Uploads", href: "/admin/uploads", desc: "Manage product images" },
];

export default function AdminDashboardPage() {
    return (
        <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", padding: "2rem 1.5rem" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ borderBottom: "1px solid #1a1a1a", paddingBottom: "1.5rem", marginBottom: "2.5rem" }}>
                    <p style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                        YungDrip Admin
                    </p>
                    <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#f5f5f0", letterSpacing: "-0.02em" }}>
                        Dashboard
                    </h1>
                </div>

                {/* Stats Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "1rem",
                        marginBottom: "2.5rem",
                    }}
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            style={{
                                backgroundColor: "#111111",
                                border: "1px solid #1a1a1a",
                                padding: "1.5rem",
                            }}
                        >
                            <p style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{stat.icon}</p>
                            <p style={{ color: "#f5f5f0", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                                {stat.value}
                            </p>
                            <p style={{ color: "#888888", fontSize: "0.8rem" }}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Admin Quick Links */}
                <div>
                    <h2 style={{ color: "#f5f5f0", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                        Quick Access
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                        {adminLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    display: "block",
                                    backgroundColor: "#111111",
                                    border: "1px solid #1a1a1a",
                                    padding: "1.5rem",
                                    textDecoration: "none",
                                    transition: "border-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#c9a84c")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1a1a1a")}
                            >
                                <h3 style={{ color: "#f5f5f0", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>
                                    {link.label} →
                                </h3>
                                <p style={{ color: "#555555", fontSize: "0.8rem" }}>{link.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
