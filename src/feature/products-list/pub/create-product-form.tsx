"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createProductAction } from "../actions";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/ui/utils";

const createProductFormSchema = z.object({
    name: z.string(),
    description: z.string(),
})

export function CreateProductForm({
    revalidatePagePath,
    className
}: {
    className?: string
    revalidatePagePath: string
}){
    const [isCreateTransition, startCreateTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(createProductFormSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    });

    const onSubmit = (data: z.infer<typeof createProductFormSchema>) => {
        startCreateTransition(async () => {
            createProductAction(data, revalidatePagePath);
        } )
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn(className, "space-y-8")}
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Название</FormLabel>
                            <FormControl>
                                <Input placeholder="Введите название..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Описание</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Введите название..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button 
                    type="submit"
                    disabled={isCreateTransition}
                >
                    Добавить
                </Button>
            </form>
        </Form>
    )
}