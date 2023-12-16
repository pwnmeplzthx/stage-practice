import { revalidatePath } from "next/cache";
import { productsRepository } from "../products.repository"
import { ProductItem } from "../ui/product-item";

export async function ProductsList({
    revalidatePagePath
}: {
    revalidatePagePath: string
}){
    const productsList = await productsRepository.getProductsList();
    const handleDeleteProduct = async (productId: string) => {
        "use server";

        await productsRepository.deleteProductElement({id: productId});
        revalidatePath(revalidatePagePath);
    }

    return (
        <div className="flex flex-col gap-3">
            {productsList.map((product: ProductListElement) => {
                return (
                    <ProductItem 
                        key={product.id}
                        product={product}
                        onDelete={handleDeleteProduct.bind(null, product.id)}
                    />
                )
            })}
        </div>
    )
}