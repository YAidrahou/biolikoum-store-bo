import { Product } from "@/types/Product";
import getColor from "@/utils/helpers/getColor";
import { useState } from 'react';

const ProductCardEdit = ({ product, cancelToggle, updateToggle }: { product: any, cancelToggle: () => void, updateToggle: () => void }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleInputChange = (field: any, value: any) => {
        setUpdatedProduct({ ...updatedProduct, [field]: value });
    };

    const handleUpdateToggle = (p: Product) => {
        console.log(p);
        updateToggle();
    }

    return (
        <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-1 py-8">
            {/* Product Image */}
            <div className="w-full">
                <img
                    src={updatedProduct.image || "/placeholder.svg"}
                    alt={updatedProduct.name}
                    className="object-cover rounded-lg w-full sm:w-1/2 md:w-full max-w-full"
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
                <div className="space-y-2">
                    <div className="flex items-start justify-between">
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={updatedProduct.name}
                                className="text-2xl font-bold border border-primary rounded-lg p-2 bg-background"
                                onChange={(e) => handleInputChange('name', e.target.value)}
                            />
                            <input
                                type="text"
                                value={updatedProduct.category}
                                className="text-muted-foreground border border-primary rounded-lg p-2 bg-background"
                                onChange={(e) => handleInputChange('category', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-end justify-end gap-2">
                        <span
                            className={`rounded-3xl ${getColor(updatedProduct.status)} text-white font-semibold text-center px-5 py-1`}
                        >
                            {updatedProduct.status}
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    <input
                        type="number"
                        value={updatedProduct.price}
                        className="text-3xl font-bold border border-primary rounded-lg p-2 bg-background"
                        onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                    />
                </div>

                <div className="grid gap-4 pt-4">
                    <div className="grid gap-2">
                        <label className="text-sm font-medium">Stock Status</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                value={updatedProduct.stock}
                                className="text-2xl font-bold border border-primary rounded-lg p-2 bg-background"
                                onChange={(e) => handleInputChange('stock', parseInt(e.target.value))}
                            />
                            <span className="text-sm text-muted-foreground">units available</span>
                        </div>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex gap-4 pt-4 justify-end mt-auto">
                    <button className="flex-1 border border-secondary hover:border-primary hover:text-primary rounded-lg"
                        onClick={() => cancelToggle()}>
                        Cancel
                    </button>
                    <button className="flex-1 border border-secondary hover:border-primary hover:text-primary rounded-lg p-4"
                        onClick={() => handleUpdateToggle   (updatedProduct)}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCardEdit;