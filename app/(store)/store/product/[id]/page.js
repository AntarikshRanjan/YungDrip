/* =============================================================
   PRODUCT DETAIL PAGE — app/(store)/store/product/[id]/page.js
   =============================================================
   Individual product detail page layout:
   
   - Two-column layout: image (left) + details (right)
   - Product name, price with strikethrough original, sale badge
   - Size selector buttons
   - Add to Cart CTA button
   - Product description
   - Related products section at the bottom
   
   Loads product by ID from data/products.json
   Falls back to "not found" if ID is invalid
   ============================================================= */

"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
    /* ---- Get product ID from URL params ---- */
    const params = useParams();
    const productId = parseInt(params.id, 10);

    /* ---- Find the current product ---- */
    const product = products.find((p) => p.id === productId);

    /* ---- Size selection state ---- */
    const [selectedSize, setSelectedSize] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);

    /* ---- Handle "Add to Cart" click ---- */
    const handleAddToCart = () => {
        if (!selectedSize) return;
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    /* ---- Get related products (same category, excluding current) ---- */
    const relatedProducts = product
        ? products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
        : [];

    /* ---- Format price to INR ---- */
    const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

    /* ---- Product not found state ---- */
    if (!product) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-white text-4xl font-black uppercase mb-4">
                        Product Not Found
                    </h1>
                    <p className="text-secondary mb-8">
                        The product you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-8 py-3 border border-white/30 text-white
                       text-sm font-bold uppercase tracking-widest
                       hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen">
            {/* ===== Breadcrumb Navigation ===== */}
            <div className="container-custom py-6">
                <nav className="flex items-center gap-2 text-sm text-muted">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/" className="hover:text-white transition-colors capitalize">
                        {product.category}
                    </Link>
                    <span>/</span>
                    <span className="text-secondary">{product.name}</span>
                </nav>
            </div>

            {/* ===== Main Product Section: Two-Column Layout ===== */}
            <section className="container-custom pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* -- LEFT COLUMN: Product Image -- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-[3/4] bg-elevated overflow-hidden sticky top-[90px]">
                            {/* Product image */}
                            <div
                                className="w-full h-full bg-elevated bg-center bg-cover"
                                style={{
                                    backgroundColor: "#1a1a1a",
                                    backgroundImage: `url(${product.image})`,
                                }}
                            >
                                {/* Fallback placeholder */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-[10rem] font-black text-white/5 uppercase select-none">
                                        {product.name.charAt(0)}
                                    </span>
                                </div>
                            </div>

                            {/* Sale badge */}
                            {product.badge && (
                                <span className="badge-sale absolute top-4 right-4 text-sm">
                                    {product.badge}
                                </span>
                            )}
                        </div>
                    </motion.div>

                    {/* -- RIGHT COLUMN: Product Details -- */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col"
                    >
                        {/* Product name */}
                        <h1 className="heading-display text-2xl md:text-4xl text-white mb-4">
                            {product.name}
                        </h1>

                        {/* Price block */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-white text-2xl md:text-3xl font-bold">
                                {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-muted text-lg line-through">
                                    {formatPrice(product.originalPrice)}
                                </span>
                            )}
                            {product.badge && (
                                <span className="badge-sale text-xs">{product.badge}</span>
                            )}
                        </div>

                        {/* Tax info */}
                        <p className="text-muted text-xs mb-8 uppercase tracking-wider">
                            Tax included. Shipping calculated at checkout.
                        </p>

                        {/* Divider */}
                        <div className="border-t border-border mb-8" />

                        {/* Size selector */}
                        <div className="mb-8">
                            <p className="text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Size
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[50px] h-[50px] px-4 border text-sm font-bold
                               uppercase tracking-wide transition-all duration-200
                               ${selectedSize === size
                                                ? "border-accent bg-accent text-black"
                                                : "border-border text-white hover:border-white"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            {/* Size required hint */}
                            {!selectedSize && (
                                <p className="text-muted text-xs mt-2">Please select a size</p>
                            )}
                        </div>

                        {/* Add to Cart button */}
                        <button
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                            className={`w-full py-4 text-sm font-bold uppercase tracking-widest
                         transition-all duration-300 mb-6
                         ${addedToCart
                                    ? "bg-accent text-black"
                                    : selectedSize
                                        ? "bg-white text-black hover:bg-accent"
                                        : "bg-elevated text-muted cursor-not-allowed"
                                }`}
                        >
                            {addedToCart
                                ? "✓ Added to Cart"
                                : selectedSize
                                    ? "Add to Cart"
                                    : "Select a Size"}
                        </button>

                        {/* Buy Now button */}
                        <button
                            className="w-full py-4 border border-white/30 text-white text-sm
                         font-bold uppercase tracking-widest
                         hover:bg-white hover:text-black transition-all duration-300 mb-8"
                        >
                            Buy It Now
                        </button>

                        {/* Divider */}
                        <div className="border-t border-border mb-8" />

                        {/* Product description */}
                        <div className="mb-8">
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Description
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Product details list */}
                        <div>
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
                                Details
                            </h3>
                            <ul className="space-y-2 text-secondary text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    Premium heavyweight cotton
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    Oversized streetwear fit
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    Custom YungDrip embroidery
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    Machine washable
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== Related Products Section ===== */}
            {relatedProducts.length > 0 && (
                <section className="bg-black py-20 border-t border-border/30">
                    <div className="container-custom">
                        {/* Section header */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="heading-display text-2xl md:text-4xl text-white mb-12"
                        >
                            You May Also Like
                        </motion.h2>

                        {/* Related products grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relProduct, index) => (
                                <ProductCard
                                    key={relProduct.id}
                                    product={relProduct}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
