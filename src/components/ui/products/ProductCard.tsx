'use client';
import { Product } from "@/types/Product";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import ProductCardView from "./ProductCardView";
import ProductCardEdit from "./ProductCardEdit";

const ProductCard = ({ product }: { product: Product }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [productId, setProductId] = useState<number | undefined>(undefined);

    const handleToggleEdit = (id:number) => {
        setProductId(id);
        setIsEditing(!isEditing);
    }

    const handleCancelToggle = () => {
        setIsEditing(!isEditing);
    }

    const handleUpdateToggle = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className="flex flex-col">
            <header className="border-b bg-background/95">
                <div className="container flex h-14 items-center gap-4">
                    <Link href="/products" className="flex items-center gap-2 hover:opacity-75">
                        <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                        Back to Products
                    </Link>
                </div>
            </header>

            <main className="flex-1 container py-4 px-7 max-w-screen-lg mx-auto">
                {
                    !isEditing ? (
                        <ProductCardView product={product}  editeToggle={handleToggleEdit} />
                    ):(
                        <ProductCardEdit product={product} cancelToggle={handleCancelToggle} updateToggle={handleUpdateToggle} />
                    )
                }
            </main>
        </div>
    )
}

export default ProductCard;
