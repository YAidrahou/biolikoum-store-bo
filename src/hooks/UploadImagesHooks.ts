import axios from "axios";
import { useState } from "react"

const useUploadImagesHooks = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const addImage = async (image:any) => {
        
        try {
            setLoading(true);
            const respone = await axios.post('/api/uploadImage', image, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setLoading(false);
            return respone;
            
        } catch (error) {
            setLoading(false);
            if(error instanceof Error){
                const errorMessage = error.message || "an unexpected error happend";
                setError(errorMessage);
            }
        }
    }


    return {
        loadingImage:loading,
        errorOnImage:error,
        addImage
    }

}

export default useUploadImagesHooks;