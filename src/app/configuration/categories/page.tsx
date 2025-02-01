'use client';
import TableLayout from "@/components/common/tablewithdata/TableLayout";
import { CategoriesProvider, useCategoriesContext } from "@/context/CategoriesContext";
import { CategoryIn } from "@/types/CategoryIn";
import { useState } from "react";

const Categories = () => {

    const [isAdding, setIsAdding] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);


    const {
        loading,
        categories,
        add,
        update,
        remove
    } = useCategoriesContext();


    if (loading) {
        return <div>Loading...</div>
    }

    const column = [
        "name"
    ];

    const handleAdding = (item: any) => {
        add(item, () => {
            setIsAdding(false);
        })

    }

    const handleUpdating = (item: any) => {
        update(item, () => { })

    }

    const handleDeleting = (idItem: string) => {
        remove(idItem, () => { })

    }


    const newItem: CategoryIn = {
        name: ""
    };

    return (

        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between mb-6">
                <h1 className=" uppercase font-bold text-secondary text-3xl">categories</h1>
                <button className="bg-primary text-white font-semibold p-4 place-self-end rounded-lg" onClick={() => { setIsAdding(true) }} >Add new category</button>
            </div>

            <TableLayout
                data={categories}
                newItem={newItem}
                column={column}
                isAdding={isAdding}
                cancleToggle={() => { setIsAdding(false) }}
                addToggle={handleAdding}
                updateToggle={handleUpdating}
                deleteToggle={handleDeleting}
            />
        </div>

    )

}

export default Categories;