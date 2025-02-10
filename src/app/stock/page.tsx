"use client";
import StockContainer from "@/components/ui/stock/StockContainer";
import { StockProvider } from "@/context/StockContext";

const StockPage = () => {

    return (
        <StockProvider>
            <StockContainer />
        </StockProvider>
    );
}

export default StockPage;