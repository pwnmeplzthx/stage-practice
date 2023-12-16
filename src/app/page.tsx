import { Button } from "@/shared/ui/button";
import { PrismaClient } from "@prisma/client";
import { useEffect } from "react";

const client = new PrismaClient();

export default function Home() {
    const productsHandler = async () => {
        const products = await client.product.findMany();
        console.log(products)
    }
    
    productsHandler();
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Button>Button</Button>
        </main>
    );
}
