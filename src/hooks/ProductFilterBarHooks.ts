import { useState } from 'react';

const useProductFilterBarHooks = () => {
    const [filter, setFilter] = useState('');
    const [view, setView] = useState('grid');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    
    /*useEffect(() => {
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(filter.toLowerCase());
        });
    
        setFilteredProducts(filteredProducts);
    }, [filter, products]);*/
    
    return {
        filter,
        setFilter,
        view,
        setView,
        sort,
        setSort,
        search,
        setSearch    
    };
}
export default useProductFilterBarHooks;