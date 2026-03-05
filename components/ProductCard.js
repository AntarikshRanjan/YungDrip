/* =============================================================
   PRODUCT CARD COMPONENT — Streetwear Product Display
   =============================================================
   Matches YungDrip product grid card style:
   - Full-bleed product image with hover zoom
   - Mint green sale badge in top-right corner
   - Product name (bold uppercase) below image
   - Price with original price strikethrough
   - Hover lift animation
   ============================================================= */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/**
 * ProductCard — Displays a single product in the grid
 * @param {Object} product - Product data from products.json
 * @param {number} index - Grid position for stagger animation
 */
export default function ProductCard({ product, index = 0 }) {
    /* ---- Format price to INR currency ---- */
    const formatPrice = (price) => {
        return `₹${price.toLocaleString("en-IN")}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                href={`/store/product/${product.id}`}
                className="group block hover-lift"
            >
                {/* -- Image Container -- */}
                <div className="relative aspect-[3/4] overflow-hidden bg-elevated mb-3">
                    {/* Product image with hover zoom */}
                    <div
                        className="w-full h-full bg-elevated bg-center bg-cover
                       transition-transform duration-500 group-hover:scale-105"
                        style={{
                            backgroundColor: "#1a1a1a",
                            backgroundImage: `url(${product.image})`,
                        }}
                    >
                        {/* Fallback: Show product initials if no image loads */}
                        <div className="w-full h-full flex items-center justify-center
                           text-muted text-4xl font-black uppercase opacity-30">
                            {product.name.charAt(0)}
                        </div>
                    </div>

                    {/* Sale badge — positioned top-right like YungDrip */}
                    {product.badge && (
                        <span className="badge-sale absolute top-3 right-3 z-10">
                            {product.badge}
                        </span>
                    )}
                </div>

                {/* -- Product Info -- */}
                <div className="space-y-1">
                    {/* Name: bold uppercase */}
                    <h3 className="text-white text-sm font-bold uppercase tracking-wide
                        group-hover:text-accent transition-colors duration-200
                        line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Price row */}
                    <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-bold">
                            {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-muted text-sm line-through">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
