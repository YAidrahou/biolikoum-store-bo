import mongoose, { Schema, Document } from 'mongoose';

interface SizeDocument extends Document {
    name: string;
    price: number;
}

const SizeSchema = new Schema<SizeDocument>({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

const Size = mongoose.models.Size || mongoose.model<SizeDocument>('Size', SizeSchema);

export default Size;
