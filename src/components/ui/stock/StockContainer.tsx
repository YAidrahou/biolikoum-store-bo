'use client';
import { useProductFilterBar } from "@/context/ProductFilterBarContext";
import GridContainer from "./grid/Container";
import { useState } from "react";
import AddNewStock from "./AddNewStock";

const StockContainer = () => {
    
    const {view} = useProductFilterBar();
    const [isAdding, setIsAdding] = useState(false);
    

    const handleAdding = () => {

        setIsAdding(!isAdding);

    }

    return (
       
        <div className="flex flex-col w-full">
            <div className="flex justify-end w-full py-4">
                <button className={` ${ isAdding ? 'bg-gray-400' : 'bg-primary'}  text-white font-semibold text-lg p-2 place-self-end rounded-md mr-3`} disabled={isAdding} onClick={handleAdding}> Add new stock </button>
            </div>
            {
                isAdding && (
                    <div className="w-full flex justify-center">
                        <AddNewStock  closeToggle={handleAdding} />
                    </div>

                )
            }
            {
                view === "grid" ? (
                    <GridContainer />
                    
                )
                : (
                    <GridContainer />
                )

            }
        </div>
    );
}
export default StockContainer;