import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useGeneralizedCrudHooks = (url: string) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const addNewRec = async (newRec: any, callbackDone?: () => void) => {
        const previousData = [...data];

        try {
            setLoading(true);
            const response = await axios.post(url, newRec);
            setData([...data, response.data]);
            callbackDone?.();
        } catch (error) {
            setData(previousData);
            setError(error instanceof Error ? error.message : "An unexpected error happened");
        } finally {
            setLoading(false);
        }
    };

    const updateRec = async (recToUpdate: any, callbackDone?: () => void) => {
        try {
            setLoading(true);
            const response = await axios.put(url, recToUpdate);
            setData(data.map(rec => (rec["_id"] === recToUpdate["_id"] ? response.data : rec)));
            callbackDone?.();
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unexpected error happened");
        } finally {
            setLoading(false);
        }
    };

    const deleteRec = async (id: any, callbackDone?: () => void) => {
        try {
            setLoading(true);
            await axios.delete(`${url}?id=${id}`);
            setData(data.filter(item => item["_id"] !== id));
            callbackDone?.();
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unexpected error happened");
        } finally {
            setLoading(false);
        }
    };

    const getById = async (id: any, callbackDone?: (rec: any) => void) => {
        try {
            setLoading(true);
            const response = await axios.get(`${url}?id=${id}`);
            callbackDone?.(response.data);
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unexpected error happened");
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        loading,
        error,
        addNewRec,
        updateRec,
        deleteRec,
        getById
    };
};

export default useGeneralizedCrudHooks;