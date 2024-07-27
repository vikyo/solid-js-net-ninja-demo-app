import { products } from '../data/db';
import { ProductDataProps } from './interfaces';

export const getProducts = () => {
    return new Promise<ProductDataProps[]>((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProduct = (selectedId: number) => {
    return new Promise<ProductDataProps>((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((i) => i.id === selectedId);
            if (product) {
                resolve(product);
            } else {
                reject(new Error('Product not found'));
            }
        }, 500);
    });
};
