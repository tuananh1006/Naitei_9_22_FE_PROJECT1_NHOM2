import { useState, useEffect } from "react";
import { getProductById } from "@/services/ProductService";
import { Product } from "@/types/Product";

export const useProductDetail = (id: number) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                setLoading(true);
                const product = await getProductById(id);
                setProduct(product);
            } catch(error: any){
                setError(error);
            } finally{
                setLoading(false);
            }
        }
        fetchProduct();
    }, [id]);

    return { product, loading, error };
};

