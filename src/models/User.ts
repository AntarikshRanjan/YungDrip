import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    role: "customer" | "admin";
    addresses: {
        label: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        isDefault: boolean;
    }[];
    wishlist: mongoose.Types.ObjectId[];
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const AddressSchema = new Schema({
    label: { type: String, default: "Home" },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true, default: "India" },
    isDefault: { type: Boolean, default: false },
});

const UserSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
            select: false, // Don't return password by default
        },
        avatar: {
            type: String,
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
        addresses: {
            type: [AddressSchema],
            default: [],
        },
        wishlist: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

// Hash password before saving
UserSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
UserSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
