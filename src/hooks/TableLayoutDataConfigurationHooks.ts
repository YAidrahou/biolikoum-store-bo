import { useEffect, useState } from "react";
import useGeneralizedCrudHooks from "./GeneralizedCrudHooks";

const useTableLayoutDataConfigurationHooks = (initialUrl:string,newItemStructure:any, column:any) => {

    const [url, setUrl] = useState(initialUrl);
    const [itemStructure, setItemStructure] = useState(newItemStructure);
    const [headerColumns, setHeaderColumns] = useState(column);
    const [isAdding, setIsAdding] = useState(false);
    const [additionalData, setAdditionalData] = useState(null);

    const {
        data,
        addNewRec,
        updateRec,
        deleteRec,
    } = useGeneralizedCrudHooks(url);


    useEffect(() => {

        if (initialUrl) setUrl(initialUrl);
        if (newItemStructure) setItemStructure(newItemStructure);
        if (column) setHeaderColumns(column);

    }, [initialUrl, newItemStructure, column]);


    return {
        data,
        itemStructure,
        headerColumns,
        isAdding,
        additionalData,
        addNewRec,
        updateRec,
        deleteRec,
        setUrl,
        setIsAdding,
        setAdditionalData
    }

} 
export default useTableLayoutDataConfigurationHooks;