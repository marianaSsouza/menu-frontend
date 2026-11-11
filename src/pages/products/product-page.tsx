import { useCategory } from "@/cases/categories/hooks/use-category";
import { useSearchParams } from "react-router-dom";

export function ProductPage() {

    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('categoryId');

    const { data: selectedCategory} = useCategory(categoryId ?? '') // se o categoryId for null ou undefined, vou passar uma string vazia para a query, assim ela não vai disparar a query e não vai dar erro;


    return (
        <div className="flex flex-col gap-6">
            {selectedCategory && (
            <h2 className="text-2xl font-semibold uppercase">
                {selectedCategory.name}
            </h2>

            ) }
            
        </div>
    )
}