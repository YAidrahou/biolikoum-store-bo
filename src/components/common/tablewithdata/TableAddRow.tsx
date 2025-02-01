'use client';
import TableAddRowActions from "./TableAddRowAction";

const TableAddRow = ({ item,cancelToggle, addToggle }: { item: Record<string, any>, cancelToggle: () => void, addToggle: (item:any) => void }) => {

    const handleAdd = () => {
        addToggle(item);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key:string) => {
        item[key] = e.target.value;
        console.log(item);
    }

    return (
        <div className="flex border-b p-3 min-h-[60px] ">
            {
                Object.entries(item).map(([key], index) => (
                    (!key.startsWith("_") && !key.startsWith("__")) && <input className="bg-background focus:outline-none flex-1 px-2 break-words" type={key === "price" ? "number" : "text"} placeholder={`Entre ${key}`} key={index} onChange={(e)=> handleChange(e,key)} />
                ))
            }
            <div className="flex-1 text-end px-2">
                <TableAddRowActions cancel={cancelToggle} add={handleAdd} />
            </div>
        </div>
    );
};
export default TableAddRow;