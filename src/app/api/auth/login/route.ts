import { NextRequest } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { signToken } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/utils";

// POST /api/auth/login
export async function POST(req: NextRequest) {
    try {
        await connectDB();

        const { email, password } = await req.json();

        if (!email || !password) {
            return apiError("Email and password are required", 400);
        }

        // Select password explicitly since it's hidden by default
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return apiError("Invalid email or password", 401);
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return apiError("Invalid email or password", 401);
        }

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
                    avatar: user.avatar,
                },
            },
            "Logged in successfully"
        );
    } catch (error) {
        console.error("[POST /api/auth/login]", error);
        return apiError("Login failed");
    }
}
