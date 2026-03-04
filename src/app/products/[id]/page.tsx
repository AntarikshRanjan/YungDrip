import type { Metadata } from "next";
import ProductDetailClient from "@/components/ProductDetailClient";

export const metadata: Metadata = {
    title: "Product Details",
    description: "View product details on YungDrip.",
};

// Placeholder — replace with real DB fetch once MongoDB is connected
function getMockProduct(id: string) {
    return {
        id,
        name: "YD Oversized Hoodie",
        price: 2999,
        compareAtPrice: 3999,
        description:
            "The signature YD Oversized Hoodie. Crafted from 380 GSM heavyweight fleece with a dropped shoulder silhouette. Clean embroidered YD logo on chest. Built for the bold.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Onyx Black", "Off White", "Ash Grey"],
        category: "hoodies",
        sku: "YD-HOODIE-001",
        stock: 24,
        tag: "BESTSELLER",
    };
}

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = getMockProduct(id);
    return <ProductDetailClient product={product} />;
}
