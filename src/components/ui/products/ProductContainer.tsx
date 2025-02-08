import { Product } from "@/types/ProductIn";
import ProductCardGrid from "./ProductCardGrid";
import ProductCardList from "./ProductCardList";
import { useProductFilterBar } from "@/context/ProductFilterBarContext";
import Link from "next/link";
import { useProductsContext } from "@/context/ProductsContext";

const ProductContainer = () => {
    const {view} = useProductFilterBar();

    const {
        products,
        errorOnProducts,
        loadingProducts
    } = useProductsContext();

    if (loadingProducts) return <p>Loading products...</p>

    return (
       
        <div className="flex flex-col w-full">
            <div className="flex justify-end w-full py-4">
                <Link href="/products/addProduct" className="bg-primary text-white font-semibold text-lg p-2 place-self-end rounded-md mr-3"> Add new product</Link>
            </div>
            {
                view === "grid" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4 overflow-y-auto">

                        {
                            products.map((product : Product) =>
                                <ProductCardGrid key={product._id} product={product} />
                            )
                        }
                    </div>
                )
                : (
                    <ul role="list" className="flex flex-col items-center w-full p-6">
                        {
                            products.map((product: Product) =>
                                <ProductCardList key={product._id} product={product} />
                            )
                        }
                    </ul>
                )

            }
        </div>
    );
}
export default ProductContainer;