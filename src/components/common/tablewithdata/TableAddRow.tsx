'use client';
import useCategoriesHooks from "@/hooks/CategoriesHooks";
import TableAddRowActions from "./TableAddRowAction";

const TableAddRow = ({ item,cancelToggle, addToggle }: { item: Record<string, any>, cancelToggle: () => void, addToggle: (item:any) => void }) => {

    const {
        categories
    } = useCategoriesHooks();

    const handleAdd = () => {
        addToggle(item);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key:string) => {
        item[key] = e.target.value;
        console.log(item);
    }

    return (
        <div className="flex border-b p-3 min-h-[60px] ">
            {
                Object.entries(item).map(([key], index) => (
                    (!key.startsWith("_") && !key.startsWith("__")) && (
                            key.startsWith("parent_id") ?
                                <select
                                    onChange={(e) => handleChange(e, key)}
                                    key={key}
                                    className="border p-3 w-full mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(category => (
                                        <option key={category["_id"]} value={category["_id"]}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                : <input className="bg-background focus:outline-none flex-1 px-2 break-words"
                                    type={key === "price" ? "number" : "text"}
                                    placeholder={`Entre ${key}`} key={index}
                                    onChange={(e) => handleChange(e, key)} />
                        )
                ))
            }
            <div className="flex-1 text-end px-2">
                <TableAddRowActions cancel={cancelToggle} add={handleAdd} />
            </div>
        </div>
    );
};
export default TableAddRow;