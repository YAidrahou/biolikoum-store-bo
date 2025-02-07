import mongoose, { Schema, Document } from 'mongoose';

interface CategoryDocument extends Document {
    name: string;
    parent_id: mongoose.Types.ObjectId | null;
}

const CategorySchema = new Schema<CategoryDocument>({
    name: { type: String, required: true },
    parent_id: { type: Schema.Types.ObjectId, ref: 'Category', required: false, default:null }
});

const Category = mongoose.models.Category || mongoose.model<CategoryDocument>('Category', CategorySchema);

export default Category;
