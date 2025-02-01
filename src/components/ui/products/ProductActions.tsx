'use client';
import { useState, useRef, useEffect } from "react";

const ProductActions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const handleView = () => {

    }

    const handleEdit = () => {
        
    }

    const handleDelete = () => {
        
    }

    return (
        <div className="relative inline-block" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-200"
            >
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                    <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        View
                    </button>
                    <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                        Edit
                    </button>
                    <button className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left">
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
export default ProductActions;
