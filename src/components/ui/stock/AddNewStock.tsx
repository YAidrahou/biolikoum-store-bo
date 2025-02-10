'use client';
import FormInput from "@/components/common/forms/FormInput";
import FormSelect from "@/components/common/forms/FormSelect";
import { useStockContext } from "@/context/StockContext";
import { StockIn } from "@/types/StockIn";
import { useEffect, useState } from "react";

const AddNewStock = (
    {
        closeToggle
    }: {
        closeToggle: () => void
    }) => {

    const {
        addStock,
        sizesWithDetails,
        errorDetails,
        loadingDetails,
        getSizeWithDetails,
        stockLoading
    } = useStockContext();

    const [stock, setStock] = useState<StockIn>({
        size_id: "",
        quantity: 0,
        status: "Out of Stock"
    });

    const handleChange = (key: any, value: any) => {
        const status = stock.quantity > 0 ? (stock.quantity < 10 ? "Low Stock" : "In Stock") : "Out of Stock";
        setStock(prevState => ({
            ...prevState,
            [key]: key === "quantity" ? Number(value) : value,
            status: key === "quantity" ? status : prevState.status
        }));

    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addStock(stock, () => {
            closeToggle();
        })
    }

    if (errorDetails) { return <p> Error while getting : {errorDetails}.</p> }
    if (loadingDetails) { return <p> Loading... </p> }

    const transformedSizeData = sizesWithDetails.map(({ _id, size, productDetails }: { _id: any, size: string, productDetails: any }) => ({
        _id,
        name: productDetails?.name + " -- " + size,
    }));

    return (
        <div className="flex w-full lg:w-[700px] h-[500px] justify-center items-center mb-10 p-4 bg-gray-200 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col w-full lg:w-[400px] space-y-4">

                <div className="mb-4 w-full">
                    <FormSelect value={stock.size_id} keyInput="size_id" options={transformedSizeData} label="Product" handleChange={(value) => handleChange("size_id", value)} />
                </div>

                <div className="mb-4 w-full">
                    <FormInput value={stock.quantity} keyInput="quantity" type="number" label="Quantity" handleChange={(value) => handleChange("quantity", value)} />
                </div>

                {/* Form Actions */}
                <div className="w-full ">
                    <button className="font-semibold text-gray-600 w-1/2 p-2 px-4 text-lg" onClick={closeToggle}> cancel </button>
                    <button className="font-semibold bg-primary p-2 w-1/2 rounded-lg text-white text-lg" type="submit"> Add </button>
                </div>
            </form>
        </div>
    );

};
export default AddNewStock;