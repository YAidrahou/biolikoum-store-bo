import useGeneralizedCrudHooks from "./GeneralizedCrudHooks";
import useUploadImagesHooks from "./UploadImagesHooks";

const useProductHooks = () => {

    const url = "/api/products";
    const {
        data,
        error,
        loading,
        addNewRec,
        updateRec,
        deleteRec,
        getById
    } = useGeneralizedCrudHooks(url);

    const {
        addImage,
        loadingImage,
        errorOnImage
    } = useUploadImagesHooks();


    const add = (rec:any,callbackDone:()=>void) => {
        addNewRec(rec,callbackDone);
    }

    const update = (rec:any,callbackDone:()=>void) => {
        updateRec(rec,callbackDone);
    }

    const remove = (id:any,callbackDone:()=>void) => {
        deleteRec(id,callbackDone);
    }

    const addNewImage = (image:any) => {
        return addImage(image);
    }

    const getProductById = (id:string,callbackDone:(rec:any)=>void) => {
        return getById(id,callbackDone);
    }

    return {
        products:data,
        errorOnProducts:error,
        loadingProducts:loading,
        add,
        update,
        remove,
        addNewImage,
        getProductById,
        errorOnImage,
        loadingImage
    }

} 
export default useProductHooks;