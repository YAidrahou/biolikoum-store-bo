import mongoose, { Document, Schema } from 'mongoose';

interface ProductDocument extends Document {
    name: string;
    category: mongoose.Types.ObjectId;
    image: string; // Store URL
    sizes: mongoose.Types.ObjectId[];
}

const productSchema = new Schema<ProductDocument>({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    image: { type: String, required: true }, // Store image URL
    sizes: [{ type: Schema.Types.ObjectId, ref: 'Size', required: true }] 
});

const Product = mongoose.models.Product || mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
