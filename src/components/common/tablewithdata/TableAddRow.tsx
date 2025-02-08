'use client';
import TableAddRowActions from "./TableAddRowAction";
import { useTableData } from "@/context/TableLayoutDataConfigurationContext";

const TableAddRow = () => {

    const {
        data,
        itemStructure,
        additionalData,
        setIsAdding,
        addNewRec
    } = useTableData();

    const handleAdd = () => {
        addNewRec(itemStructure,()=>{
            setIsAdding(false);
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key:string) => {
        itemStructure[key] = e.target.value;
        console.log(itemStructure);
    }

    console.log(data);


    return (
        <div className="flex border-b p-3 min-h-[60px] ">
            {
                Object.entries(itemStructure).map(([key], index) => (
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
                                    onChange={(e) => handleChange(e, key)} />
                        )
                ))
            }
            <div className="flex-1 text-end px-2">
                <TableAddRowActions cancel={()=>{setIsAdding(false)}} add={handleAdd} />
            </div>
        </div>
    );
};
export default TableAddRow;