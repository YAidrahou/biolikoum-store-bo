import { Product } from "@/types/ProductIn";
import getColor from "@/utils/helpers/getColor";

const ProductCardView = ({ product, editeToggle }: { product: any, editeToggle: (id:number) => void }) => {

    return (
        <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-1 py-8">
            {/* Product Image */}
            <div className="w-full">
                <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover rounded-lg w-full sm:w-1/2 md:w-full max-w-full"
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
                <div className="space-y-2">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-2xl font-bold">{product.name}</h1>
                            <p className="text-muted-foreground">{product.category}</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-end gap-2">
                        <span
                            className={`rounded-3xl ${getColor("In Stock")} text-white font-semibold text-center px-5 py-1`}
                        >
                            {/*product.status*/}
                            In Stock
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-3xl font-bold">${/*product.price.toFixed(2)*/} 100 MAD</p>
                </div>

                <div className="grid gap-4 pt-4">
                    <div className="grid gap-2">
                        <label className="text-sm font-medium">Stock Status</label>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold">{/*product.stock*/} 10</span>
                            <span className="text-sm text-muted-foreground">units available</span>
                        </div>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex gap-4 pt-4 justify-end mt-auto">
                    <button className="flex-1 border border-secondary hover:border-primary hover:text-primary rounded-lg">
                        Update Stock
                    </button>
                    <button className="flex-1 border border-secondary hover:border-primary hover:text-primary rounded-lg p-4"
                        onClick={()=>editeToggle(product.id)}>
                        Edit Details
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ProductCardView;