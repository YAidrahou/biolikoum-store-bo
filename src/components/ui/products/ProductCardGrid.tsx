import { Product } from "@/types/ProductIn";
import ProductActions from "./ProductActions";
import getColor from "@/utils/helpers/getColor";
import Link from "next/link";

const ProductCardGrid = ({ product }: { product: Product }) => {
    return (
        <div className="product-card-grid flex flex-col items-center justify-center bg-white rounded-lg p-5 border border-l-neutral-300 cursor-default  hover:border-primary ">
            <img src={product.image} alt={product.name} />
            <div className="product-card-info-actions flex flex-row justify-between w-full my-5">
                <div className="">
                    <h3 className="text-[24px] font-semibold text-secondary ">{product.name}</h3>
                    <span className="text-[16px] font-normal text-gray-600">{product.description}</span>
                </div>
            </div>
            <p className="text-gray-500 text-[18px] w-full text-lef mb-4">{product.category}</p>
            <Link href={`/products/${product._id}`} className="border rounded-lg border-gray-300 text-secondary w-full py-4 font-semibold hover:border-primary cursor-pointer text-center">View Product</Link>
        </div>
    );
}
export default ProductCardGrid;