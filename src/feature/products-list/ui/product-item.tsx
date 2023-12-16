"use client"

import { Button } from "@/shared/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"
import { useTransition } from "react"

export function ProductItem({
    product,
    onDelete
}: {
    product: ProductListElement,
    onDelete: () => Promise<void>
}){

    const [isLoadingDelete, startDeleteTransition] = useTransition();
    const handleDelete = () => {
        startDeleteTransition(async () => {
            await onDelete();
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button
                    onClick={handleDelete}
                    disabled={isLoadingDelete}
                >
                    Удалить
                </Button>
            </CardFooter>
        </Card>
    )
}