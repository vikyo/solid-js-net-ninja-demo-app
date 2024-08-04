import { A } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';
import { useCartContext } from '../context/CartContext';

const Header: Component = () => {
    const [darkTheme, setDarkTheme] = createSignal<boolean>(false);
    const { items } = useCartContext();

    const toggleTheme = () => {
        setDarkTheme(!darkTheme());
    };

    const getQty = () => {
        return items.reduce((prev, curr) => {
            return prev + curr.qty;
        }, 0);
    };

    return (
        <header
            class="my-4 p-2 text-xl flex items-center gap-4"
            classList={{
                'bg-neutral-900': darkTheme(),
                'text-white': darkTheme(),
            }}
        >
            <span
                class="material-symbols-outlined cursor-pointer"
                onClick={toggleTheme}
            >
                {darkTheme() ? 'light_mode' : 'dark_mode'}
            </span>
            <h1>Ninja Merch</h1>

            <A href="/">Home</A>
            <A href="/cart">Cart ({getQty()})</A>
        </header>
    );
};

export default Header;
