'use client';
import TableLayout from "@/components/common/tablewithdata/TableLayout";
import { TableDataProvider, useTableData } from "@/context/TableLayoutDataConfigurationContext";
import { CategoryIn } from "@/types/CategoryIn";

const Inner = () => {

    const {
        isAdding,
        setIsAdding
    } = useTableData();

    return (

        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between mb-6">
                <h1 className=" uppercase font-bold text-secondary text-3xl">categories</h1>
                <button className={` text-white font-semibold p-4 place-self-end rounded-lg  ${isAdding ? "bg-gray-400" : "bg-primary"}`} onClick={() => { setIsAdding(true) }} disabled={isAdding}>Add new category</button>
            </div>

            <TableLayout />
        </div>

    )

}

const Categories = () => {

    const column = [
        "name"
    ];

    const newItem: CategoryIn = {
        name: "",
        parent_id: null
    };

    return (
        <TableDataProvider url="/api/categories" newItem={newItem} column={column}>
            <Inner />
        </TableDataProvider>
    );
};



export default Categories;