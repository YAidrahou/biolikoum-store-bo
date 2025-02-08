export interface StockIn {
    size_id: string;
    quantity: number;
    status: "In Stock" | "Out of Stock" | "Low Stock";
}