import useStockHooks from '@/hooks/StockHooks';
import { StockContextType } from '@/types/StockContextType';
import { createContext, ReactNode, useContext } from 'react';


const StockContext = createContext< StockContextType | undefined>(undefined);

const StockProvider = ({ children }: { children: ReactNode }) => {
    const {
        stockData,
        stockLoading,
        stockError,
        sizesWithDetails,
        errorDetails,
        loadingDetails,
        getSizeWithDetails, 
        addStock,
        updateStock,
        removeStock
    } = useStockHooks();

    const value = {
        stockData,
        stockLoading,
        stockError,
        sizesWithDetails,
        errorDetails,
        loadingDetails,
        getSizeWithDetails, 
        addStock,
        updateStock,
        removeStock
    }

    return (
        <StockContext.Provider value={value}>
            {children}
        </StockContext.Provider>
    );
};

// Custom Hook for using the context
const useStockContext = () => {
    const context = useContext(StockContext);
    if (!context) {
        throw new Error('useStockContext must be used within a StockProvider');
    }
    return context;
};


export { StockProvider, useStockContext };