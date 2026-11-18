import { useProducts } from "../hooks/use-product";
import { ProductCard } from "./product-card";


type ProductListProps = {
    categoryId?: string
}

export function ProductList({ categoryId }: ProductListProps) {
    
    const { data: products = [], isLoading} = useProducts(categoryId) //se não tiver produtos, retorna um array vazio para não dar erro no map;
    
    return(
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
                <li key={product.id}>
                    {isLoading ? (
                        <span>Carregando</span>
                    ) : (
                        <ProductCard product={product} />
                    )}
                    
                </li>
            ))}
        </ul>
    )
}