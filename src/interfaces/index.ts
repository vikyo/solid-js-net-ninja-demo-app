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

export interface CartProps {
    children: JSX.Element;
}

export interface CartItemProps {
    title: string;
    qty: number;
    id: number;
    price: number;
}

export type CartItem = {
    title: string;
    qty: number;
    id: number;
    price: number;
};

export type CartContextType = {
    items: CartItem[];
    setItems: (items: CartItem[]) => void;
};
