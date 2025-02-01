import { CategoryIn } from "./CategoryIn";

export interface Product {
    _id?: number;
    image: string;
    name: string;
    category: string;
    sizes: Array<string>;
    status: "In Stock" | "Out of Stock" | "Low Stock";
}