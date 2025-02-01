import mongoose, { Schema, Document } from 'mongoose';

interface CategoryDocument extends Document {
    name: string;
}

const CategorySchema = new Schema<CategoryDocument>({
    name: { type: String, required: true }
});

const Category = mongoose.models.Category || mongoose.model<CategoryDocument>('Category', CategorySchema);

export default Category;
