import { useEffect } from "react";
import useGeneralizedCrudHooks from "./GeneralizedCrudHooks";
import useSizeWithProductDetailsHooks from "./SizeWithProductDetailsHooks";

const useStockHooks = () => {

    const urlStock = "/api/stock";

    const {

        data : stockData,
        loading : stockLoading,
        error : stockError,
        addNewRec,
        updateRec,
        deleteRec

    } = useGeneralizedCrudHooks(urlStock);

    const { 
        sizesWithDetails,
        errorDetails,
        loadingDetails,
        getWithDetails        

    } = useSizeWithProductDetailsHooks();

    useEffect(() => {
        getWithDetails();
    },[])


    const addStock = (record : any,callbackDone?: () => void) => {
        addNewRec(record, callbackDone ? callbackDone : undefined)
    }

    const updateStock = (record : any,callbackDone?: () => void) => {
        updateRec(record, callbackDone ? callbackDone : undefined)
    }

    const removeStock = (record : any,callbackDone?: () => void) => {
        deleteRec(record, callbackDone ? callbackDone : undefined)
    }

    const getSizeWithDetails = (callbackDone?: () => void ) => {
        getWithDetails(callbackDone ? callbackDone : undefined)
    }


    return {
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

};

export default useStockHooks;