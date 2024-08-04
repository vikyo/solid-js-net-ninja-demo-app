import { Component, createContext, createEffect, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import {
    CartContextType,
    CartItem,
    CartProps,
    SetItemsFunction,
} from '../interfaces';

const CartContext = createContext<CartContextType>({
    items: [],
    setItems: () => {},
});

export const CartContextProvider: Component<CartProps> = (props) => {
    // Load cart items from local storage
    const loadItemsFromLocalStorage = (): CartItem[] => {
        const storedItems = localStorage.getItem('cartItems');
        return storedItems ? JSON.parse(storedItems) : [];
    };

    // Save cart items to local storage
    const saveItemsToLocalStorage = (items: CartItem[]) => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    // Initialize store with items from local storage
    const [items, setItems] = createStore<CartItem[]>(
        loadItemsFromLocalStorage()
    );

    // Update local storage whenever items change
    createEffect(() => {
        saveItemsToLocalStorage(items);
    });

    const customSetItems: SetItemsFunction = (
        arg1: any,
        arg2?: keyof CartItem,
        arg3?: any
    ) => {
        if (
            typeof arg1 === 'function' &&
            typeof arg2 === 'string' &&
            typeof arg3 === 'function'
        ) {
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
