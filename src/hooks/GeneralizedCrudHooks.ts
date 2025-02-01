import axios from "axios";
import { useEffect, useState } from "react"

const useGeneralizedCrudHooks = (url:string) => {

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {

        const fetchData = async () => {
            try {

                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
            
        }

        fetchData();

    },[url]);


    const addNewRec = async (newRec:any, callbackDone:() => void) => {
        
        const startingData = data.map(function (rec) {
            return { ...rec };
        });

        try {

            const response = await axios.post(url,newRec);
            setData([...data,response.data]);
            if(callbackDone) callbackDone();

        } catch (error) {
            setLoading(false);
            if(error instanceof Error){
                const errorMessage = error.message || "an unexpected error happend";
                setData(startingData);
                setError(errorMessage);
            }
        }
    }

    const updateRec = async (recToUpdate:any,callbackDone: ()=>void) => {
        try {
            const response = await axios.put(url, recToUpdate);
            console.log(recToUpdate);
            const newDataArray = data.map(rec => rec["_id"] === recToUpdate["_id"] ? response.data : rec);
            setData(newDataArray);
            if(callbackDone) callbackDone();
        } catch (error) {
            setLoading(false);
            if(error instanceof Error){
                const errorMessage = error.message || "an unexpected error happend";
                setError(errorMessage);
            }
        }
    }

    const deleteRec = async (id:any, callbackDone:()=>void) => {
        try {

            await axios.delete(`${url}?id=${id}`);
            const newDataArray = data.filter(item => item["_id"] !== id);
            setData(newDataArray);
            if(callbackDone) callbackDone();

        } catch (error) {
            setLoading(false);
            if(error instanceof Error){
                const errorMessage = error.message || "an unexpected error happend";
                setError(errorMessage);
            }
        }
    }

    /*const getRec = () => {
        
    }*/

    return {
        data,
        loading,
        error,
        setLoading,
        setError,
        addNewRec,
        updateRec,
        deleteRec
    }

}

export default useGeneralizedCrudHooks;