import useGeneralizedCrudHooks from "./GeneralizedCrudHooks";

const useStockHooks = () => {

    const urlStock = "/api/stock";
    const urlSize = "/api/sizes";

    const {

        data : stockData,
        loading : stockLoading,
        error : stockError,
        addNewRec,
        updateRec,
        deleteRec

    } = useGeneralizedCrudHooks(urlStock);

    const { 

        data : sizeData,
        loading : sizeLoading,
        error : sizeError

    } = useGeneralizedCrudHooks(urlSize);


    const addStock = (record : any,callbackDone?: () => void) => {
        addNewRec(record, callbackDone ? callbackDone : undefined)
    }

    const updateStock = (record : any,callbackDone?: () => void) => {
        updateRec(record, callbackDone ? callbackDone : undefined)
    }

    const removeStock = (record : any,callbackDone?: () => void) => {
        deleteRec(record, callbackDone ? callbackDone : undefined)
    }


    return {
        stockData,
        stockLoading,
        stockError,
        sizeData,
        sizeLoading,
        sizeError,
        addStock,
        updateStock,
        removeStock
    }

};

export default useStockHooks;