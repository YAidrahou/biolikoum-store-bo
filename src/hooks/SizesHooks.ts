import useGeneralizedCrudHooks from "./GeneralizedCrudHooks";

const useSizesHooks = () => {

    const url = "/api/sizes";
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
        sizes:data,
        errorOnSizes:error,
        loadingSizes:loading,
        add,
        update,
        remove
    }

} 
export default useSizesHooks;