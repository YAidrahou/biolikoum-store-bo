interface CategoryDetails {
    name?: string;
}
interface ProductDetails {
    name: string;
    image:string;
}
interface SizeDetails {
    size: string;
    price: string;
}
export interface StockDisplayInterface {
    _id?:any;
    quantity: number;
    status: "In Stock" | "Out of Stock" | "Low Stock";
    sizeDetails?:SizeDetails;
    productDetails?:ProductDetails;
    categoryDetails?:CategoryDetails
}