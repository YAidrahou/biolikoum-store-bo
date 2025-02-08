import mongoose, { Schema, Document } from 'mongoose';

interface SizeDocument extends Document {
    product_id:mongoose.Types.ObjectId;
    size: string;
    price: string;  
}

const SizeSchema = new Schema<SizeDocument>({
    product_id: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    size: { type: String, required: true },
    price: { type: String, required: true }
});

const Size = mongoose.models.Size || mongoose.model<SizeDocument>('Size', SizeSchema);

export default Size;
