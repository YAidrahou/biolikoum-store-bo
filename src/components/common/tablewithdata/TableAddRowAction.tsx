'use client';
import { Check, X } from "lucide-react";

const TableAddRowActions = ({cancel,add}:{cancel:()=>void,add:()=>void}) => {


    return (
        <div className="relative flex flex-row justify-end" >
            <X onClick={()=>{cancel()}} className="mr-2 cursor-pointer"/>
            <Check onClick={()=>{add()}} className="cursor-pointer"/>
        </div>
    );
}

export default TableAddRowActions;