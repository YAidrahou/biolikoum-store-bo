import useGeneralizedCrudHooks from "./GeneralizedCrudHooks";

const useCategoriesHooks = () => {

    const url = "/api/categories";
    const {
        data,
        error,
        loading,
        addNewRec,
        updateRec,
        deleteRec
    } = useGeneralizedCrudHooks(url);


    const add = (rec:any,callbackDone:()=>void) => {
        addNewRec(rec,callbackDone);
    }

    const update = (rec:any,callbackDone:()=>void) => {
        updateRec(rec,callbackDone);
    }

    const remove = (id:any,callbackDone:()=>void) => {
        deleteRec(id,callbackDone);
    }

    return {
        categories:data,
        errorOnCategories:error,
        loadingCategories:loading,
        add,
        update,
        remove
    }

} 
export default useCategoriesHooks;