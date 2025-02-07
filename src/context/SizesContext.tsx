
import useSizesHooks from '@/hooks/SizesHooks';
import { SizeContextType } from '@/types/SizeContextType';
import { createContext, ReactNode, useContext } from 'react';


const SizesContext = createContext< SizeContextType | undefined>(undefined);

const SizesProvider = ({ children }: { children: ReactNode }) => {
    const {
        sizes,
        loadingSizes,
        errorOnSizes,
        add,
        update,
        remove
    } = useSizesHooks();

    const value = {
        sizes,
        loadingSizes,
        errorOnSizes,
        add,
        update,
        remove
    }

    return (
        <SizesContext.Provider value={value}>
            {children}
        </SizesContext.Provider>
    );
};

// Custom Hook for using the context
const useSizesContext = () => {
    const context = useContext(SizesContext);
    if (!context) {
        throw new Error('useSizesContext must be used within a SizesProvider');
    }
    return context;
};


export { SizesProvider, useSizesContext };