import useTableLayoutDataConfigurationHooks from "@/hooks/TableLayoutDataConfigurationHooks";
import { TableLayoutDataConfiguration } from "@/types/TableLayoutDataConfiguration";
import { createContext, useContext } from "react";



const TableLayoutDataConfigurationContext = createContext<TableLayoutDataConfiguration | null>(null);

export const useTableData = () => {
    const context = useContext(TableLayoutDataConfigurationContext);
    if (!context) {
        throw new Error("useTableData must be used within a TableDataProvider");
    }
    return context;
};

export const TableDataProvider = ({
    url,
    newItem,
    column,
    children
}: {
    url: string,
    newItem: any,
    column: any,
    children: React.ReactNode
}) => {
    const tableData = useTableLayoutDataConfigurationHooks(url, newItem, column);

    return (
        <TableLayoutDataConfigurationContext.Provider value={tableData}>
            {children}
        </TableLayoutDataConfigurationContext.Provider>
    );
};
