import mongoose, { Document, Schema } from 'mongoose';

interface ProductDocument extends Document {
    name: string;
    description: string;
    category: mongoose.Types.ObjectId;
    image: string;
}

const productSchema = new Schema<ProductDocument>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    image: { type: String, required: true }, // Store image URL
});

const Product = mongoose.models.Product || mongoose.model<ProductDocument>('Product', productSchema);

export default Product;
