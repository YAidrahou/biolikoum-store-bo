import { useState } from "react";
import axios from "axios";

const useSizeWithProductDetailsHooks = () => {

    const url = "/api/sizes";

    const [sizesWithDetails, setSizesWithDetails] = useState<any[]>([]);
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [errorDetails, setErrorDetails] = useState<string | null>(null);

    const getWithDetails = async (callbackDone?: (data: any) => void) => {
        try {
            setLoadingDetails(true);
            const response = await axios.get(`${url}?withDetails=true`);
            setSizesWithDetails(response.data);  // Store the result in state
            callbackDone?.(response.data);
        } catch (error) {
            setErrorDetails(error instanceof Error ? error.message : "An unexpected error occurred");
        } finally {
            setLoadingDetails(false);
        }
    };

    return {
        sizesWithDetails,
        loadingDetails,
        errorDetails,
        getWithDetails
    }

} 
export default useSizeWithProductDetailsHooks;