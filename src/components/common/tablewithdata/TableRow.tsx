'use client';
import { useState } from "react";
import TableRowActions from "./TableRowActions";
import TableAddRowActions from "./TableAddRowAction";

const TableRow = ({ item, updateItem, deleteItem }: { item: Record<string, any>, updateItem: (item: any) => void, deleteItem: (idItem: string) => void }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [recToUpdate, setRecToUpdate] = useState({ ...item });

    const handleDelete = () => {
        deleteItem(item["_id"]);
    }

    const handleUpdate = () => {
        updateItem(recToUpdate);
        setIsEdit(false);
    }

    const editToggle = () => {
        setRecToUpdate({ ...item });
        setIsEdit(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
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
                        (!key.startsWith("_") && !key.startsWith("__")) && <input className="bg-background focus:outline-none flex-1 px-2 break-words" type={key === "price" ? "number" : "text"} placeholder={`Entre ${key}`} key={index} value={value as string | number | readonly string[] | undefined} onChange={(e) => handleChange(e, key)} />
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