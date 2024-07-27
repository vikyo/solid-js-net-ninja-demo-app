import { JSX } from 'solid-js';

export interface CardProps {
    flat: boolean;
    rounded: boolean;
    children: JSX.Element;
}

export interface AppProps {
    children?: JSX.Element | JSX.Element[];
}

export interface ProductDataProps {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
}

export interface ProductProps {
    product: ProductDataProps;
}

export interface ProductDetailUseParamsProps {
    [key: string]: string;
    id: string;
}
