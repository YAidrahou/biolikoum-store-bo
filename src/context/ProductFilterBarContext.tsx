import useProductFilterBarHooks from '@/hooks/ProductFilterBarHooks';
import { ProductFilterBarContextType } from '@/types/ProductFilterBarContextType';
import { createContext, ReactNode, useContext } from 'react';


const ProductFilterContext = createContext<ProductFilterBarContextType | undefined>(undefined);

const ProductFilterBarProvider = ({ children }: { children: ReactNode }) => {
    const {
        filter,
        setFilter,
        view,
        setView,
        sort,
        setSort,
        search,
        setSearch
    } = useProductFilterBarHooks();

    const value = {
        filter,
        setFilter,
        view,
        setView,
        sort,
        setSort,
        search,
        setSearch
    }

    return (
        <ProductFilterContext.Provider value={value}>
            {children}
        </ProductFilterContext.Provider>
    );
};

// Custom Hook for using the context
const useProductFilterBar = () => {
    const context = useContext(ProductFilterContext);
    if (!context) {
        throw new Error('useProductFilterBar must be used within a ProductFilterBarProvider');
    }
    return context;
};


export { ProductFilterBarProvider, useProductFilterBar };