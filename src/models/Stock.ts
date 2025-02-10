import mongoose, { Document, Schema } from 'mongoose';

interface StockDocument extends Document {
    size_id: mongoose.Types.ObjectId;
    quantity: number;
    status: "In Stock" | "Out of Stock" | "Low Stock";
}

const stockSchema = new Schema<StockDocument>({
    size_id: { type: Schema.Types.ObjectId, ref: 'Size', required: true },
    quantity: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ["In Stock", "Out of Stock", "Low Stock"], // Enforced enum
        default: "In Stock"
    }
}, { timestamps: true });

const Stock = mongoose.models.Stock || mongoose.model<StockDocument>('Stock', stockSchema);

export default Stock;
