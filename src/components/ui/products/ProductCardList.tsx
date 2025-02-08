import { Product } from "@/types/ProductIn";

const ProductCardList = ({ product }: { product: Product }) => {
    return (
        <li className="w-2/3 flex justify-between hover:bg-white px-4 shadow-sm hover:rounded-lg items-center gap-x-6 border-b-2 border-gray-300 py-4 h-[150px]">
            <div className="flex min-w-0 gap-x-4">
                <img className="size-20 flex-none rounded-lg bg-gray-50" src={product.image} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-2xl font-semibold text-gray-900">{product.name}</p>
                    <p className="mt-1 truncate text-sm text-gray-500">{product.description}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-2xl font-bold text-gray-900 mb-3">{product.category}</p>
            </div>
        </li>
    );
}
export default ProductCardList;