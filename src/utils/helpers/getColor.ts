import { Product } from "@/types/Product";

const getColor = (status: Product["status"]) => {
    const colors: Record<Product["status"], string> = {
        "In Stock": "bg-instock",
        "Out of Stock": "bg-outstock",
        "Low Stock": "bg-lowstock",
    };
    return colors[status] || "bg-instock";
};

export default getColor;