import { A } from '@solidjs/router';
import { createSignal, type Component } from 'solid-js';
import banner from './assets/banner.png';
import { AppProps } from './interfaces';

const App: Component<AppProps> = (props) => {
    const [darkTheme, setDarkTheme] = createSignal<boolean>(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme());
    };
    return (
        <div class="container m-auto bg">
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

            <img class="rounded-md" src={banner} alt="site banner" />
            {props.children}
        </div>
    );
};

export default App;
