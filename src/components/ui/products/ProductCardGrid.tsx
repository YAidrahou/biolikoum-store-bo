import { Product } from "@/types/Product";
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
                    <span className="text-[16px] font-normal text-gray-600">{product.category}</span>
                </div>
                <ProductActions />
            </div>
            <div className="flex flex-row justify-between w-full mb-4">
                <p className="font-bold text-2xl">100 MAD</p>
                <span className={`rounded-3xl ${getColor(product.status)} text-white font-semibold text-center px-5 py-1`}>{/*product.status*/}In Stock</span>
            </div>
            <p className="text-gray-500 text-[18px] w-full text-lef mb-4">Stock: 20 units{/*product.stock*/} {/*product.stock > 1 ? ` units` : ` unit`*/}</p>
            <Link href={`/products/${product._id}`} className="border rounded-lg border-gray-300 text-secondary w-full py-4 font-semibold hover:border-primary cursor-pointer text-center">View Product</Link>
        </div>
    );
}
export default ProductCardGrid;