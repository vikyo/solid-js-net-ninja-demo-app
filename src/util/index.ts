import { getProduct, getProducts } from '../api';
import { ProductDataProps } from '../interfaces';

export const fetchProducts = async (): Promise<ProductDataProps[]> => {
    const data = await getProducts();
    return data;
};

export const fetchProductById = async (
    id: number
): Promise<ProductDataProps> => {
    const data = await getProduct(id);
    return data;
};
