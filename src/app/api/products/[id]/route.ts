import { NextRequest } from "next/server";
import connectDB from "@/lib/db";
import Product from "@/models/Product";
import { apiSuccess, apiError, generateSlug } from "@/lib/utils";
import { getUserFromRequest } from "@/lib/auth";

interface Params {
    params: Promise<{ id: string }>;
}

// GET /api/products/[id] — get single product by id or slug
export async function GET(req: NextRequest, { params }: Params) {
    try {
        await connectDB();
        const { id } = await params;

        const product = await Product.findOne({
            $or: [{ slug: id }, { _id: id.match(/^[a-f\d]{24}$/i) ? id : null }],
        });

        if (!product) return apiError("Product not found", 404);
        return apiSuccess(product, "Product fetched successfully");
    } catch (error) {
        console.error("[GET /api/products/:id]", error);
        return apiError("Failed to fetch product");
    }
}

// PATCH /api/products/[id] — update a product (admin only)
export async function PATCH(req: NextRequest, { params }: Params) {
    try {
        const user = getUserFromRequest(req);
        if (!user || user.role !== "admin") {
            return apiError("Unauthorized — admin access required", 401);
        }

        await connectDB();
        const { id } = await params;
        const body = await req.json();

        if (body.name) {
            body.slug = generateSlug(body.name);
        }

        const product = await Product.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!product) return apiError("Product not found", 404);
        return apiSuccess(product, "Product updated successfully");
    } catch (error) {
        console.error("[PATCH /api/products/:id]", error);
        return apiError("Failed to update product");
    }
}

// DELETE /api/products/[id] — delete a product (admin only)
export async function DELETE(req: NextRequest, { params }: Params) {
    try {
        const user = getUserFromRequest(req);
        if (!user || user.role !== "admin") {
            return apiError("Unauthorized — admin access required", 401);
        }

        await connectDB();
        const { id } = await params;

        const product = await Product.findByIdAndDelete(id);
        if (!product) return apiError("Product not found", 404);

        return apiSuccess(null, "Product deleted successfully");
    } catch (error) {
        console.error("[DELETE /api/products/:id]", error);
        return apiError("Failed to delete product");
    }
}
