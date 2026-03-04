import { NextResponse } from "next/server";

export function apiSuccess(data: unknown, message = "Success", status = 200) {
    return NextResponse.json(
        {
            success: true,
            message,
            data,
        },
        { status }
    );
}

export function apiError(message = "An error occurred", status = 500) {
    return NextResponse.json(
        {
            success: false,
            message,
        },
        { status }
    );
}

export function generateSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}
