import mongoose, { Schema, Document, Model } from "mongoose";

export type OrderStatus =
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "refunded";

export interface IOrderItem {
    productId: mongoose.Types.ObjectId;
    name: string;
    image: string;
    price: number;
    size: string;
    color: string;
    quantity: number;
}

export interface IOrder extends Document {
    orderId: string;
    user: mongoose.Types.ObjectId;
    items: IOrderItem[];
    shippingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
    };
    paymentMethod: string;
    paymentStatus: "pending" | "paid" | "failed" | "refunded";
    orderStatus: OrderStatus;
    subtotal: number;
    shippingCost: number;
    discount: number;
    total: number;
    notes?: string;
    trackingNumber?: string;
    createdAt: Date;
    updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
});

const OrderSchema: Schema<IOrder> = new Schema(
    {
        orderId: {
            type: String,
            unique: true,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        items: {
            type: [OrderItemSchema],
            required: true,
        },
        shippingAddress: {
            name: { type: String, required: true },
            street: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: String, required: true },
            country: { type: String, required: true, default: "India" },
            phone: { type: String, required: true },
        },
        paymentMethod: {
            type: String,
            required: true,
            enum: ["card", "upi", "cod", "netbanking"],
        },
        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed", "refunded"],
            default: "pending",
        },
        orderStatus: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "processing",
                "shipped",
                "delivered",
                "cancelled",
                "refunded",
            ],
            default: "pending",
        },
        subtotal: { type: Number, required: true },
        shippingCost: { type: Number, required: true, default: 0 },
        discount: { type: Number, default: 0 },
        total: { type: Number, required: true },
        notes: { type: String },
        trackingNumber: { type: String },
    },
    {
        timestamps: true,
    }
);

// Auto-generate orderId before save
OrderSchema.pre("save", function () {
    if (!this.orderId) {
        this.orderId = `YD-${Date.now()}-${Math.random()
            .toString(36)
            .substring(2, 7)
            .toUpperCase()}`;
    }
});

// Index for fast user-order lookups
OrderSchema.index({ user: 1, createdAt: -1 });
OrderSchema.index({ orderStatus: 1 });

const Order: Model<IOrder> =
    mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
