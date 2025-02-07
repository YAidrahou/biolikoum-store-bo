'use client';
import { useState } from "react";
import TableRowActions from "./TableRowActions";
import TableAddRowActions from "./TableAddRowAction";
import { useTableData } from "@/context/TableLayoutDataConfigurationContext";

const TableRow = ({ item }: { item: Record<string, any>}) => {

    const {
        data,
        additionalData,
        deleteRec,
        updateRec
    } = useTableData();


    const [isEdit, setIsEdit] = useState(false);
    const [recToUpdate, setRecToUpdate] = useState({ ...item });

    const handleDelete = () => {
        deleteRec(item["_id"],()=>{});
    }

    const handleUpdate = () => {
        updateRec(recToUpdate,()=>{
            setIsEdit(false);
        });
    }

    const editToggle = () => {
        setRecToUpdate({ ...item });
        setIsEdit(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
        setRecToUpdate({
            ...recToUpdate,
            [key]: key === "price" ? parseInt(e.target.value) : e.target.value,
        })
    }

    return (
        <div className={`flex border-b ${!isEdit ? "hover:text-white hover:bg-primary-500" : ""} p-3 min-h-[60px]`}>
            {
                !isEdit ?
                    Object.entries(item).map(([key, value], index) => (
                        (!key.startsWith("_") && !key.startsWith("__")) && <div className="flex-1 px-2 break-words place-self-center" key={index}> {value} </div>
                    ))
                    :
                    Object.entries(recToUpdate).map(([key, value], index) => (
                        (!key.startsWith("_") && !key.startsWith("__")) && (
                            (key.startsWith("parent_id") || key.startsWith("product_id")) ?
                                <select
                                    onChange={(e) => handleChange(e, key)}
                                    key={key}
                                    className="border p-3 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Select { key.startsWith("parent_id") ? "category" : "select product" }</option>
                                    {
                                        key.startsWith("parent_id") ?
                                        data.map(rec => (
                                            <option key={rec["_id"]} value={rec["_id"]}>
                                                {rec.name}
                                            </option>
                                        ))
                                        :
                                        additionalData.map((rec:any) => (
                                            <option key={rec["_id"]} value={rec["_id"]}>
                                                {rec.name}
                                            </option>
                                        ))

                                    }
                                </select>
                                : <input className="bg-background focus:outline-none flex-1 px-2 break-words"
                                    type={key === "price" ? "number" : "text"}
                                    placeholder={`Entre ${key}`} key={index}
                                    value={value as string | number | readonly string[] | undefined}
                                    onChange={(e) => handleChange(e, key)} />
                        )
                    ))
            }
            <div className="flex-1 text-end px-2">
                {
                    !isEdit ?
                        <TableRowActions isEditToggle={editToggle} isDeleteToggle={handleDelete} />
                        :
                        <TableAddRowActions cancel={() => setIsEdit(false)} add={handleUpdate} />
                }

            </div>
        </div>
    );
};
export default TableRow;