'use client';
import TableLayout from "@/components/common/tablewithdata/TableLayout";
import useSizesHooks from "@/hooks/SizesHooks";
import { SizeIn } from "@/types/SizeIn";
import { useState } from "react";

const Sizes = () => {

    const [isAdding, setIsAdding] = useState(false);


    const {
        loadingSizes,
        sizes,
        add,
        update,
        remove
    } = useSizesHooks();


    if (loadingSizes) {
        return <div>Loading...</div>
    }

    const column = [
        "size",
        "price"
    ];


    const handleAdding = (item: any) => {
        add(item, () => {
            setIsAdding(false);
        })

    }

    const handleUpdating = (item: any) => {
        update(item, () => {})

    }

    const handleDeleting = (idItem: string) => {
        remove(idItem, () => {})

    }

    const newItem: SizeIn = {
        name: "",
        price: 0
    };

    return (

        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between mb-6">
                <h1 className=" uppercase font-bold text-secondary text-3xl">sizes</h1>
                <button className={`text-white font-semibold p-4 place-self-end rounded-lg ${isAdding ? "bg-gray-400" : "bg-primary"}`} onClick={() => { setIsAdding(true) }} disabled={isAdding}>Add new size</button>
            </div>

            <TableLayout
                data={sizes}
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

export default Sizes;