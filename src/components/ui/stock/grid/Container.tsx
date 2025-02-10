"use client";
import { useStockContext } from "@/context/StockContext";
import Card from "./Card";
import { StockDisplayInterface } from "@/types/StockDisplayInterface";

const GridContainer = () => {

    const {
        stockData,
        stockError,
        stockLoading
    } = useStockContext();

    if (stockError) { return <p> Error while getting : {stockError}.</p> }
    if (stockLoading) { return <p> Loading... </p> }

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full p-4 overflow-y-auto">

            {
                stockData.map((stock : StockDisplayInterface) =>
                    <Card key={stock._id} stock={stock}  />
                )
            }
        </div>
    );
}
export default GridContainer;