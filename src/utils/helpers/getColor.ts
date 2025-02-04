import { Product } from "@/types/ProductIn";

const getColor = (status: string) => {
    const colors: Record<string, string> = {
        "In Stock": "bg-instock",
        "Out of Stock": "bg-outstock",
        "Low Stock": "bg-lowstock",
    };
    return colors[status] || "bg-instock";
};

export default getColor;