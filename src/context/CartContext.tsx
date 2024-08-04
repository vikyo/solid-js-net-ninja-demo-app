import { Component, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { CartContextType, CartItem, CartProps, SetItemsFunction } from '../interfaces';

const CartContext = createContext<CartContextType>({
    items: [],
    setItems: () => { }
});

export const CartContextProvider: Component<CartProps> = (props) => {
    const [items, setItems] = createStore<CartItem[]>([]);

    const customSetItems: SetItemsFunction = (arg1: any, arg2?: keyof CartItem, arg3?: any) => {
        if (typeof arg1 === "function" && typeof arg2 === "string" && typeof arg3 === "function") {
            // Handle the case where setItems is called with a predicate, key, and updater function
            setItems((prevItems) =>
                prevItems.map((item) =>
                    arg1(item) ? { ...item, [arg2]: arg3(item[arg2]) } : item
                )
            );
        } else if (Array.isArray(arg1)) {
            // Handle the case where setItems is called with a new items array
            setItems(arg1);
        }
    };

    return (
        <CartContext.Provider value={{ items, setItems: customSetItems }}>
            {props.children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
