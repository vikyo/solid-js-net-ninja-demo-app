import { Component, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { CartContextType, CartItem, CartProps } from '../interfaces';

const CartContext = createContext<CartContextType>({
    items: [],
    setItems: () => { },
});

export const CartContextProvider: Component<CartProps> = (props) => {
    const [items, setItems] = createStore<CartItem[]>([
        { title: 'test123', qty: 10, id: 101, price: 2000 },
        { title: 'te3', qty: 10, id: 101, price: 3000 },
    ]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext)
}

