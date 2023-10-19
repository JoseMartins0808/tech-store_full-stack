import { prismaClient } from "@/lib/prisma"
import { CategoriesItem } from "./categories-item";

export async function CategoriesOverview() {
    const categories = await prismaClient.category.findMany();

    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {categories.map((category) => (
                <CategoriesItem key={category.id} category={category} />
            ))}
        </div>
    )
}