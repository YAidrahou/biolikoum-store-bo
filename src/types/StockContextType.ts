export interface StockContextType {
    stockData: any,
    stockLoading: any,
    stockError: any,
    sizeData: any,
    sizeLoading: any,
    sizeError: any,
    addStock: (rec: any, callbackDone?: () => void) => void,
    updateStock: (rec: any, callbackDone?: () => void) => void,
    removeStock: (rec: any, callbackDone: () => void) => void
}