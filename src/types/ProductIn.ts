import { CategoryIn } from "./CategoryIn";

export interface Product {
    _id?: number;
    image: string;
    name: string;
    description?: string;
    category: string;
}