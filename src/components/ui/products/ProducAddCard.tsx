'use client';
import useCategoriesHooks from "@/hooks/CategoriesHooks";
import { Product } from "@/types/ProductIn";
import { useEffect, useRef, useState } from "react";

const ProductAddCard = ({
    submitToggle
}: {
    submitToggle: (product: Product, image: any) => void
}) => {

    const {
        categories,
        loadingCategories,
        errorOnCategories
    } = useCategoriesHooks();

    const [product, setProduct] = useState<Product>({
        name: "",
        image: "",
        category: "",
        description: ""
    });

    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState('');


    // Handle image selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            setImageUrl(URL.createObjectURL(e.target.files[0]));

        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!image) {
            alert('Please upload an image first!');
            return;
        }

        submitToggle(product, image);

    };

    const handleFormChange = (key: string, value: any) => {
        setProduct(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    if (errorOnCategories) return <p>Error while loading categories : {errorOnCategories}.</p>

    return (

        <form onSubmit={handleSubmit} className="p-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-1 py-8">
                {/* Product Image */}
                <div className="relative w-full h-[400px]">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <img
                        src={imageUrl ? imageUrl : "/images/placeholder.svg"}
                        alt={product.name}
                        className="object-cover rounded-lg w-full sm:w-1/2 md:w-full max-w-full h-full"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <div className="space-y-2">
                        <div className="flex items-start justify-between">
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={product.name}
                                onChange={(e) => handleFormChange("name", e.target.value)}
                                className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-start justify-between">
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={product.description}
                                onChange={(e) => handleFormChange("description", e.target.value)}
                                className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <select
                            value={product.category}
                            onChange={(e) => handleFormChange("category", e.target.value)}
                            className="border p-3 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="">Select Category</option>
                            {categories.map(category => (
                                <option key={category["_id"]} value={category["_id"]}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex gap-4 pt-4 justify-end mt-auto">
                        <button className="flex-1 py-2 px-4 border text-gray-500 border-gray-500 hover:border-primary hover:text-primary rounded-lg transition duration-300">
                            Cancel
                        </button>
                        <button type="submit" className="flex-1 py-2 px-4 border text-gray-500 border-gray-500 hover:border-primary hover:text-primary rounded-lg transition duration-300">
                            Add Product
                        </button>
                    </div>
                </div>

            </div>
        </form>
    );

}

export default ProductAddCard;