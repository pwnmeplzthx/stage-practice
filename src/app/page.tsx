import { CreateProductForm } from "@/feature/products-list/pub/create-product-form";
import { ProductsList } from "@/feature/products-list/pub/products-list";

export default function Home() {
    
    return (
        <main className="flex min-h-screen flex-col p-8">
            <CreateProductForm className="max-w-[300px] mb-10" revalidatePagePath="/" />
            <ProductsList revalidatePagePath="/" />
        </main>
    );
}
