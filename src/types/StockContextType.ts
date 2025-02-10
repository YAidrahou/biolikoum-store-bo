export interface StockContextType {
    stockData: any,
    stockLoading: any,
    stockError: any,
    sizesWithDetails: any,
    errorDetails: any,
    loadingDetails: any,
    getSizeWithDetails: (callbackDone?: () => void) => void,
    addStock: (rec: any, callbackDone?: () => void) => void,
    updateStock: (rec: any, callbackDone?: () => void) => void,
    removeStock: (rec: any, callbackDone: () => void) => void
}