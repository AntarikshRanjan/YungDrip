import { NextRequest } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { signToken } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/utils";

// POST /api/auth/register
export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return apiError("Name, email, and password are required", 400);
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return apiError("An account with this email already exists", 409);
        }

        const user = await User.create({ name, email, password });

        const token = signToken({
            userId: user._id.toString(),
            email: user.email,
            role: user.role,
        });

        return apiSuccess(
            {
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            },
            "Account created successfully",
            201
        );
    } catch (error) {
        console.error("[POST /api/auth/register]", error);
        return apiError("Registration failed");
    }
}
