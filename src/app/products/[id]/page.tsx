import ProductCard from "@/components/ui/products/ProductCard";
import { Product } from "@/types/Product";
import { notFound } from "next/navigation";

const ProductsList: Array<Product> = [
    {
        id: 1,
        name: "Product 1",
        price: 100.00,
        image: "/images/placeholder.svg",
        stock: 10,
        category: "Category 1",
        status: "In Stock"
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "/images/placeholder.svg",
        stock: 0,
        category: "Category 1",
        status: "Out of Stock"
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "/images/placeholder.svg",
        stock: 30,
        category: "Category 2",
        status: "In Stock"
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
        image: "/images/placeholder.svg",
        stock: 5,
        category: "Category 1",
        status: "Low Stock"
    },
    {
        id: 5,
        name: "Product 5",
        price: 100,
        image: "/images/placeholder.svg",
        stock: 10,
        category: "Category 1",
        status: "In Stock"
    },
    {
        id: 6,
        name: "Product 6",
        price: 200,
        image: "/images/placeholder.svg",
        stock: 10,
        category: "Category 1",
        status: "In Stock"
    },
    {
        id: 7,
        name: "Product 7",
        price: 300,
        image: "/images/placeholder.svg",
        stock: 30,
        category: "Category 2",
        status: "In Stock"
    },
    {
        id: 8,
        name: "Product 8",
        price: 400,
        image: "/images/placeholder.svg",
        stock: 5,
        category: "Category 1",
        status: "In Stock"
    }
];

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const productId = Number(params.id); // Convert string to number

    if (isNaN(productId)) {
        return notFound();
    }

    const product : Product | undefined = ProductsList.find((p)=>p.id===productId); 
    console.log(productId);
    return (
        <>
            {
                product ? (
                    <ProductCard product={product} />)
                : <h2 className="text-danger">Product {productId} not found</h2>

            }
        </>

    );    
}
export default ProductPage;
