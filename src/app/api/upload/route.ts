import { NextRequest } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { apiSuccess, apiError } from "@/lib/utils";
import { getUserFromRequest } from "@/lib/auth";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST /api/upload — upload a single image to Cloudinary
export async function POST(req: NextRequest) {
    try {
        const user = getUserFromRequest(req);
        if (!user || user.role !== "admin") {
            return apiError("Unauthorized — admin access required", 401);
        }

        const formData = await req.formData();
        const file = formData.get("file") as File | null;

        if (!file) {
            return apiError("No file provided", 400);
        }

        // Convert file to base64 for Cloudinary upload
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

        const result = await cloudinary.uploader.upload(base64, {
            folder: "yungdrip/products",
            transformation: [{ width: 1200, height: 1500, crop: "limit", quality: "auto" }],
        });

        return apiSuccess(
            { url: result.secure_url, publicId: result.public_id },
            "Image uploaded successfully"
        );
    } catch (error) {
        console.error("[POST /api/upload]", error);
        return apiError("Image upload failed");
    }
}
