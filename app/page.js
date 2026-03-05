/* =============================================================
   HOME PAGE — app/page.js
   =============================================================
   The main storefront landing page, inspired by YungDrip.in:
   
   Section 1: Full-width hero with bold "YUNGDRIP" text overlay
   Section 2: Two-column lifestyle image grid
   Section 3: "Shop by Collection" category cards
   Section 4: "Proven Favorites" — featured products grid
   Section 5: Brand story / tagline section
   
   All product data is loaded from data/products.json
   ============================================================= */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function HomePage() {
  /* ---- Filter featured products for the "Proven Favorites" section ---- */
  const featuredProducts = products.filter((p) => p.featured);

  /* ---- Collection categories ---- */
  const collections = [
    { name: "HOODIES", count: products.filter((p) => p.category === "hoodies").length },
    { name: "SWEATSHIRTS", count: products.filter((p) => p.category === "sweatshirts").length },
    { name: "TEES", count: products.filter((p) => p.category === "tees").length },
    { name: "NEW ARRIVALS", count: 4 },
  ];

  return (
    <>
      {/* ================================================================
          SECTION 1: HERO — Full-width cinematic hero
          ================================================================ */}
      <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-black">
        {/* Dark background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111]" />

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(178,255,214,0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, rgba(178,255,214,0.05) 0%, transparent 50%)`,
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          {/* Main headline — massive bold text like YungDrip */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="heading-display text-[clamp(3rem,15vw,12rem)] text-center"
          >
            <span className="text-gradient">YUNGDRIP</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary text-sm md:text-base tracking-[0.3em] uppercase mt-4"
          >
            #IMYUNG
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="#featured"
              className="inline-block px-10 py-4 border border-white/30 text-white
                         text-sm font-bold uppercase tracking-widest
                         hover:bg-white hover:text-black transition-all duration-300"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32
                       bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ================================================================
          SECTION 2: LIFESTYLE GRID — Two-column image split
          ================================================================ */}
      <section className="bg-black py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left image block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-elevated overflow-hidden group"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]
                           flex items-center justify-center">
              <span className="text-[8rem] md:text-[12rem] font-black text-white/5 uppercase
                              select-none group-hover:text-white/10 transition-colors duration-500">
                01
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay pt-20">
              <p className="text-white text-lg font-bold uppercase tracking-wide">
                New Season
              </p>
              <p className="text-secondary text-sm mt-1">Premium Streetwear</p>
            </div>
          </motion.div>

          {/* Right image block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-elevated overflow-hidden group"
          >
            <div className="w-full h-full bg-gradient-to-bl from-[#1a1a1a] to-[#0a0a0a]
                           flex items-center justify-center">
              <span className="text-[8rem] md:text-[12rem] font-black text-white/5 uppercase
                              select-none group-hover:text-white/10 transition-colors duration-500">
                02
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 gradient-overlay pt-20">
              <p className="text-white text-lg font-bold uppercase tracking-wide">
                Urban Culture
              </p>
              <p className="text-secondary text-sm mt-1">For Yung By Yung</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: SALE BANNER — Scrolling promotion strip
          ================================================================ */}
      <section className="bg-accent py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite]">
          <span className="inline-block text-black text-sm font-bold uppercase tracking-widest mx-8">
            ★ SALE LIVE NOW
          </span>
          <span className="inline-block text-black text-sm font-bold uppercase tracking-widest mx-8">
            ★ UP TO 54% OFF
          </span>
          <span className="inline-block text-black text-sm font-bold uppercase tracking-widest mx-8">
            ★ FREE SHIPPING ON ORDERS ABOVE ₹999
          </span>
          <span className="inline-block text-black text-sm font-bold uppercase tracking-widest mx-8">
            ★ SALE LIVE NOW
          </span>
          <span className="inline-block text-black text-sm font-bold uppercase tracking-widest mx-8">
            ★ UP TO 54% OFF
          </span>
          <span className="inline-block text-black text-sm font-bold uppercase tracking-widest mx-8">
            ★ FREE SHIPPING ON ORDERS ABOVE ₹999
          </span>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: SHOP BY COLLECTION — Category cards
          ================================================================ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="heading-display text-3xl md:text-5xl text-white">
              Shop by Collection
            </h2>
          </motion.div>

          {/* Category grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href="/"
                  className="group block relative aspect-square bg-elevated
                            overflow-hidden hover-lift"
                >
                  {/* Background number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[6rem] md:text-[8rem] font-black text-white/5
                                   group-hover:text-white/10 transition-colors duration-500
                                   select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-sm md:text-base font-bold uppercase
                                 tracking-wide group-hover:text-accent transition-colors
                                 duration-200">
                      {collection.name}
                    </h3>
                    <p className="text-muted text-xs mt-1">
                      {collection.count} Products
                    </p>
                  </div>

                  {/* Hover border accent */}
                  <div className="absolute inset-0 border border-transparent
                                group-hover:border-accent/30 transition-colors duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: PROVEN FAVORITES — Featured products grid
          ================================================================ */}
      <section id="featured" className="bg-black py-20 border-t border-border/30">
        <div className="container-custom">
          {/* Header with "VIEW ALL" link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="heading-display text-3xl md:text-5xl text-white">
              Proven Favorites
            </h2>
            <Link
              href="/"
              className="text-white text-sm font-bold uppercase tracking-wider
                         hover:text-accent transition-colors duration-200
                         border-b border-white/30 hover:border-accent pb-1"
            >
              View All
            </Link>
          </motion.div>

          {/* Products grid — 4 cols on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: BRAND TAGLINE — Closing statement
          ================================================================ */}
      <section className="bg-black py-32 border-t border-border/30">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-secondary text-sm uppercase tracking-[0.4em] mb-6">
              Designed for the Streets
            </p>
            <h2 className="heading-display text-[clamp(2rem,8vw,6rem)] text-gradient">
              FOR YUNG
              <br />
              BY YUNG
            </h2>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-block px-12 py-4 bg-white text-black
                           text-sm font-bold uppercase tracking-widest
                           hover:bg-accent transition-colors duration-300"
              >
                Explore All
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
