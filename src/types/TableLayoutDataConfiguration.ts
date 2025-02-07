export interface TableLayoutDataConfiguration {
    data: any[];
    itemStructure: any;
    headerColumns: any;
    isAdding: boolean;
    additionalData:any;
    addNewRec: (newRec: any, callbackDone: () => void) => Promise<void>;
    updateRec: (recToUpdate: any, callbackDone: () => void) => Promise<void>;
    deleteRec: (id: any, callbackDone: () => void) => Promise<void>;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
    setAdditionalData : React.Dispatch<React.SetStateAction<any>>;
}