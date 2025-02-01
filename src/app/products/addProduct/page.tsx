'use client';
import ProductAddCard from "@/components/ui/products/ProducAddCard";
import useProductHooks from "@/hooks/ProductHooks";
import { Product } from "@/types/Product";


const AddProducts = () => {
    const {
        add,
        addNewImage,
        loadingImage,
        errorOnProducts,
        errorOnImage
    } = useProductHooks();

    // Upload image to backend
    const uploadImage = async (image : any) => {
        
        const formData = new FormData();
        formData.append('image', image);

        const response = await addNewImage(formData);
        console.log(response);
        return response?.data?.imageUrl;

    };

    // Handle form submission
    const handleSubmit = async (product:Product, image:any) => {

        const imageUrl = await uploadImage(image);
        const updatedProduct = {
            ...product,
            image: imageUrl || '',
        };
        add(updatedProduct,()=>{
            console.log("Product added successfully...");
        });
    };

    if (errorOnImage) return <p>Error while uploading image to the server: {`error: ${errorOnImage}`}</p>;
    if (errorOnProducts) return <p>Error while saving the new product: {`error: ${errorOnProducts}`}</p>;

    if (loadingImage) return <p>Uploading image in progress...</p>;

    return (
        <div className="flex-1 container py-4 px-7 max-w-screen-lg mx-auto">
            <ProductAddCard  submitToggle={handleSubmit}/>
        </div>
    );
}

export default AddProducts;