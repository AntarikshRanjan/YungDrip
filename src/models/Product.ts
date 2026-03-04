import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    price: number;
    compareAtPrice?: number;
    images: string[];
    category: string;
    tags: string[];
    sizes: string[];
    colors: string[];
    stock: number;
    sku: string;
    isFeatured: boolean;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
        },
        slug: {
            type: String,
            required: [true, "Slug is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Product description is required"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
            min: [0, "Price cannot be negative"],
        },
        compareAtPrice: {
            type: Number,
            min: [0, "Compare at price cannot be negative"],
        },
        images: {
            type: [String],
            default: [],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            enum: ["hoodies", "tees", "joggers", "accessories", "caps", "shoes"],
        },
        tags: {
            type: [String],
            default: [],
        },
        sizes: {
            type: [String],
            enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
            default: [],
        },
        colors: {
            type: [String],
            default: [],
        },
        stock: {
            type: Number,
            required: [true, "Stock is required"],
            min: [0, "Stock cannot be negative"],
            default: 0,
        },
        sku: {
            type: String,
            required: [true, "SKU is required"],
            unique: true,
            uppercase: true,
            trim: true,
        },
        isFeatured: {
            type: Boolean,
            default: false,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

// Index for fast slug lookup
ProductSchema.index({ slug: 1 });
ProductSchema.index({ category: 1, isPublished: 1 });

const Product: Model<IProduct> =
    mongoose.models.Product ||
    mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
