/* @refresh reload */
import { Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';
import App from './App';
import ProductDetail from './components/ProductDetail';
import { CartContextProvider } from './context/CartContext';
import './index.css';

const Cart = lazy(() => import('./pages/Cart'));
const Home = lazy(() => import('./pages/Home'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
    );
}

render(
    () => (
        <CartContextProvider>
            <Router root={App}>
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/cart" component={Cart} />
                <Route path="/" component={Home} />
            </Router>
        </CartContextProvider>
    ),
    root!
);
