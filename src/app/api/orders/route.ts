import { NextRequest } from "next/server";
import connectDB from "@/lib/db";
import Order from "@/models/Order";
import { apiSuccess, apiError } from "@/lib/utils";
import { getUserFromRequest } from "@/lib/auth";

// GET /api/orders — get orders for logged-in user (or all orders for admin)
export async function GET(req: NextRequest) {
    try {
        const user = getUserFromRequest(req);
        if (!user) return apiError("Unauthorized", 401);

        await connectDB();

        const query =
            user.role === "admin" ? {} : { user: user.userId };

        const orders = await Order.find(query)
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        return apiSuccess(orders, "Orders fetched successfully");
    } catch (error) {
        console.error("[GET /api/orders]", error);
        return apiError("Failed to fetch orders");
    }
}

// POST /api/orders — create a new order
export async function POST(req: NextRequest) {
    try {
        const user = getUserFromRequest(req);
        if (!user) return apiError("Unauthorized", 401);

        await connectDB();

        const body = await req.json();
        const { items, shippingAddress, paymentMethod, subtotal, shippingCost, discount } = body;

        if (!items || items.length === 0) {
            return apiError("Order must have at least one item", 400);
        }

        const total = subtotal + (shippingCost ?? 0) - (discount ?? 0);

        const order = await Order.create({
            user: user.userId,
            items,
            shippingAddress,
            paymentMethod,
            subtotal,
            shippingCost: shippingCost ?? 0,
            discount: discount ?? 0,
            total,
        });

        return apiSuccess(order, "Order placed successfully", 201);
    } catch (error) {
        console.error("[POST /api/orders]", error);
        return apiError("Failed to place order");
    }
}
