import useProductHooks from '@/hooks/ProductHooks';
import { createContext, ReactNode, useContext } from 'react';


const ProductsContext = createContext< any | undefined>(undefined);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const {
        products,
        loadingProducts,
        errorOnProducts,
        add,
        update,
        remove
    } = useProductHooks();

    const value = {
        products,
        errorOnProducts,
        loadingProducts,
        add,
        update,
        remove
    }

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

// Custom Hook for using the context
const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProductsContext must be used within a ProductsProvider');
    }
    return context;
};


export { ProductsProvider, useProductsContext };