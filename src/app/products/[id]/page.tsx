import ProductCard from "@/components/ui/products/ProductCard";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const productId = params.id;

    if (!productId || typeof productId != "string") {
        return notFound();
    }

    return (
        <>
            {
                productId ? (
                    <ProductCard id={productId} />)
                : <h2 className="text-danger">Product {productId} not found</h2>

            }
        </>

    );    
}
export default ProductPage;
