'use client';
import ProductContainer from "@/components/ui/products/ProductContainer";
import ProductFilterBar from "@/components/ui/products/ProductFilterBar";
import { ProductFilterBarProvider } from "@/context/ProductFilterBarContext";
import { ProductsProvider } from "@/context/ProductsContext";

const Products = () => {
    return (
        <ProductsProvider>

            <ProductFilterBarProvider>

                <div className="flex flex-col items-center justify-center">
                    <ProductFilterBar />
                    <ProductContainer />
                </div>
                
            </ProductFilterBarProvider>

        </ProductsProvider>
    )
}

export default Products;