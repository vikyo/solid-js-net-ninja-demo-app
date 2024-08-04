import { A } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';

const Header: Component = () => {
    const [darkTheme, setDarkTheme] = createSignal<boolean>(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme());
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
            <A href="/cart">Cart</A>
        </header>
    );
};

export default Header;
