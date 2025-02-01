import useCategoriesHooks from '@/hooks/CategoriesHooks';
import { CategoryContextType } from '@/types/CategoryContextType';
import { createContext, ReactNode, useContext } from 'react';


const CategoriesContext = createContext< CategoryContextType | undefined>(undefined);

const CategoriesProvider = ({ children }: { children: ReactNode }) => {
    const {
        categories,
        loadingCategories,
        errorOnCategories,
        add,
        update,
        remove
    } = useCategoriesHooks();

    const value = {
        categories,
        loadingCategories,
        errorOnCategories,
        add,
        update,
        remove
    }

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};

// Custom Hook for using the context
const useCategoriesContext = () => {
    const context = useContext(CategoriesContext);
    if (!context) {
        throw new Error('useCategoriesContext must be used within a CategoriesProvider');
    }
    return context;
};


export { CategoriesProvider, useCategoriesContext };