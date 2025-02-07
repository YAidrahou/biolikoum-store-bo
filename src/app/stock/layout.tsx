'use client';
import ProductFilterBar from "@/components/ui/products/ProductFilterBar";
import { ProductFilterBarProvider } from "@/context/ProductFilterBarContext";

const StockLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ProductFilterBarProvider>
            <div className="flex flex-col h-full overflow-y-hidden">
                <ProductFilterBar />
                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </ProductFilterBarProvider>

    );
};

export default StockLayout;