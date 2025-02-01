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
        deleteRec
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

    return {
        products:data,
        errorOnProducts:error,
        loadingProducts:loading,
        add,
        update,
        remove,
        addNewImage,
        errorOnImage,
        loadingImage
    }

} 
export default useProductHooks;