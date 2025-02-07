'use client';
import TableLayout from "@/components/common/tablewithdata/TableLayout";
import { ProductsProvider } from "@/context/ProductsContext";
import { TableDataProvider, useTableData } from "@/context/TableLayoutDataConfigurationContext";
import useProductHooks from "@/hooks/ProductHooks";
import { SizeIn } from "@/types/SizeIn";
import { useEffect } from "react";

const Inner = () => {

    const {
        isAdding,
        setIsAdding,
        setAdditionalData
    } = useTableData();


    const {
        products,
        loadingProducts
    } = useProductHooks();


    useEffect(() => {
        if (!loadingProducts) {
            setAdditionalData(products);
        }
    }, [loadingProducts, products, setAdditionalData]);

    return (

        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between mb-6">
                <h1 className=" uppercase font-bold text-secondary text-3xl">sizes</h1>
                <button className={`text-white font-semibold p-4 place-self-end rounded-lg ${isAdding ? "bg-gray-400" : "bg-primary"}`} onClick={() => { setIsAdding(true) }} disabled={isAdding}>Add new size</button>
            </div>
            <TableLayout />
        </div>

    )

}

const Sizes = () => {

    const column = [
        "product_id",
        "size",
        "price"
    ];


    const newItem: SizeIn = {
        product_id: "",
        size: "",
        price: ""
    };

    return (
        <TableDataProvider url="/api/sizes" newItem={newItem} column={column}>
            <ProductsProvider>
                <Inner />
            </ProductsProvider>
        </TableDataProvider>
    );
};

export default Sizes;