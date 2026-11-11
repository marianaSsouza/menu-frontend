import { useQuery } from "@tanstack/react-query";
import { CategoryService } from "../services/category.service";

export function useCategories(){
    return useQuery({
        queryKey: ['categories'],
        queryFn: CategoryService.listAll
    })
}

export function useCategory(id: string){
    return useQuery({
        queryKey: ['category', id],
        queryFn: () => CategoryService.findOne(id),
        enabled: !!id //só vou disparar a query se o id for diferente de null ou undefined. Dá para fazer assim ou Boolean(id)
                    // as !! transformam o id em um booleano, se for null ou undefined, será false, caso contrário será true
    })
}