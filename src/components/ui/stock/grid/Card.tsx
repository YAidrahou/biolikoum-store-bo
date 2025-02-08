import ProductActions from "../../products/ProductActions";
import getColor from "@/utils/helpers/getColor";

const Card = () => {

    return (
        <div className="flex flex-col bg-white rounded-lg dark:bg-black shadow-md p-4">
            <img  src="/uploads/placeholder.svg" alt="product"/>
            <div className="product-card-info-actions flex flex-row justify-between w-full my-5">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col">
                        <h3 className="text-[24px] font-semibold text-secondary "> Orange Honey </h3>
                        <span className="text-[16px] font-normal text-gray-600"> Honey </span>
                    </div>
                    <div className="actions ml-auto">
                        <ProductActions/>
                    </div>

                </div>
            </div>
            <div className="flex flex-row w-full mb-4">
                <p className="text-secondary text-[20px]  font-bold text-lef ">100 MAD</p>
                <span className={` ${getColor("In Stock")}  py-1 px-4 text-white rounded-3xl ml-auto flex items-center`}>
                    <p>In stock</p>
                </span>
            </div>
            <p className="mb-4 text-gray-500"> Size : 500g </p>
            <p className="mb-4 text-gray-500"> Stock : 45 Units </p>
            <button className="border rounded-lg border-gray-300 text-secondary w-full py-4 font-semibold hover:border-primary cursor-pointer text-center">Update stock</button>
        </div>
    );
}

export default Card;