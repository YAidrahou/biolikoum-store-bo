'use client';
import useCategoriesHooks from "@/hooks/CategoriesHooks";
import useSizesHooks from "@/hooks/SizesHooks";
import { Product } from "@/types/Product";
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

    const {
        sizes,
        loadingSizes,
        errorOnSizes
    } = useSizesHooks();

    const [product, setProduct] = useState<Product>({
        name: "",
        image: "",
        category: "",
        sizes: [],
        status: "In Stock"
    });


    const [showSizesDropdown, setShowSizesDropdown] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState('');

    // Create a ref for the dropdown
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowSizesDropdown(false);
            }
        };

        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    const toggleSize = (size: any) => {
        setProduct((prevProduct) => {
            const newSizes = prevProduct.sizes.includes(size)
                ? prevProduct.sizes.filter((s) => s !== size)
                : [...prevProduct.sizes, size];
            return { ...prevProduct, sizes: newSizes };
        });
    };

    // Function to get size names based on selected _id
    const getSizeNames = () => {
        return sizes.filter(size => product.sizes.includes(size._id)).map(size => size.name).join(', ');
    };

    if (loadingCategories || loadingSizes) return <p>Loading Categories, and Sizes...</p>;
    if (errorOnCategories) return <p>Error while loading categories : {errorOnCategories}.</p>
    if (errorOnSizes) return <p>Error while loading sizes : {errorOnCategories}.</p>

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

                    <div className="grid gap-4 pt-4">
                        {/* Custom styled multiple select dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                className="w-full text-left border p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                                onClick={() => setShowSizesDropdown(!showSizesDropdown)}
                            >
                                {product.sizes.length === 0 ? 'Select Sizes' : getSizeNames()}
                            </button>

                            {showSizesDropdown && (
                                <div className="absolute left-0 w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
                                    <div className="max-h-60 overflow-y-auto">
                                        {sizes.map((size) => (
                                            <div key={size._id} className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100">
                                                <input
                                                    type="checkbox"
                                                    id={size.name}
                                                    value={size.name}
                                                    checked={product.sizes.includes(size["_id"])}
                                                    onChange={(e) => toggleSize(size["_id"])}
                                                    className="form-checkbox text-primary"
                                                />
                                                <label htmlFor={size.name} className="text-sm">{`${size.name} --- ${size.price}`}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex gap-4 pt-4 justify-end mt-auto">
                        <button className="flex-1 py-2 px-4 border text-gray-500 border-gray-500 hover:border-primary hover:text-primary rounded-lg transition duration-300">
                            Cancel
                        </button>
                        <button className="flex-1 py-2 px-4 border text-gray-500 border-gray-500 hover:border-primary hover:text-primary rounded-lg transition duration-300">
                            Add Product
                        </button>
                    </div>
                </div>

            </div>
        </form>
    );

}

export default ProductAddCard;