export interface ProductFilterBarContextType {
    filter: string;
    setFilter: (filter: string) => void;
    view: string;
    setView: (view: string) => void;
    sort: string;
    setSort: (sort: string) => void;
    search: string;
    setSearch: (search: string) => void;
}