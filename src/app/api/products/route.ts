import { NextRequest } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { apiSuccess, apiError, generateSlug } from "@/lib/utils";
import { getUserFromRequest } from "@/lib/auth";

// GET /api/products — list all published products (optionally filter by category)
export async function GET(req: NextRequest) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");
        const featured = searchParams.get("featured");
        const limit = parseInt(searchParams.get("limit") ?? "20");
        const page = parseInt(searchParams.get("page") ?? "1");

        const query: Record<string, unknown> = { isPublished: true };
        if (category) query.category = category;
        if (featured === "true") query.isFeatured = true;

        const skip = (page - 1) * limit;

        const [products, total] = await Promise.all([
            Product.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
            Product.countDocuments(query),
        ]);

        return apiSuccess(
            { products, total, page, totalPages: Math.ceil(total / limit) },
            "Products fetched successfully"
        );
    } catch (error) {
        console.error("[GET /api/products]", error);
        return apiError("Failed to fetch products");
    }
}

// POST /api/products — create a new product (admin only)
export async function POST(req: NextRequest) {
    try {
        const user = getUserFromRequest(req);
        if (!user || user.role !== "admin") {
            return apiError("Unauthorized — admin access required", 401);
        }

        await connectDB();

        const body = await req.json();
        const slug = generateSlug(body.name);

        const product = await Product.create({ ...body, slug });
        return apiSuccess(product, "Product created successfully", 201);
    } catch (error) {
        console.error("[POST /api/products]", error);
        return apiError("Failed to create product");
    }
}
