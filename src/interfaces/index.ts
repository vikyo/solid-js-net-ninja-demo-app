import { JSX } from 'solid-js';

export interface CardProps {
    flat: boolean;
    rounded: boolean;
    children: JSX.Element;
}

export interface AppProps {
    children?: JSX.Element | JSX.Element[];
}
