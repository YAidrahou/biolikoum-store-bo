import ProductActions from "../../products/ProductActions";
import getColor from "@/utils/helpers/getColor";
import { StockDisplayInterface } from "@/types/StockDisplayInterface";

const Card = ({ stock }: { stock: StockDisplayInterface }) => {

    return (
        <div className="flex flex-row bg-white rounded-lg dark:bg-black shadow-md p-4">
            <img src={stock.productDetails?.image ? stock.productDetails.image : "/uploads/placeholder.svg"} alt="product" className="rounded-lg" />
            <div className="w-full px-4 flex flex-col justify-between">
                <div className="product-card-info-actions flex flex-row justify-between w-full my-5">
                    <div className="flex flex-row w-full">
                        <div className="flex flex-col">
                            <h3 className="text-[18px] font-semibold text-secondary "> {stock.productDetails?.name} </h3>
                            <span className="text-[14px] font-normal text-gray-600"> {stock.categoryDetails?.name} </span>
                        </div>
                        <div className="actions ml-auto">
                            <ProductActions />
                        </div>

                    </div>
                </div>
                <div className="flex flex-row w-full mb-4">
                    <p className="text-secondary text-[18px]  font-bold text-lef ">{stock.sizeDetails?.price} MAD</p>
                    <span className={` ${getColor("In Stock")}  py-1 px-4 text-white rounded-3xl ml-auto flex items-center`}>
                        <p>In stock</p>
                    </span>
                </div>
                <div className="flex flex-col w-full mb-4">
                <p className="text-gray-500 text-[14px]"> Size : {stock.sizeDetails?.size} </p>
                <p className="text-gray-500 text-[14px]"> Stock : {(stock?.quantity && Number(stock?.quantity) > 1) ? (stock?.quantity + " units") : (stock?.quantity + " unit")}  </p>
                </div>
                <button className="border rounded-lg border-gray-300 text-secondary w-full py-4 font-semibold hover:border-primary cursor-pointer text-center">Update stock</button>
            </div>

        </div>
    );
}

export default Card;