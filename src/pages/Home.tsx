import { Component, For, Show, createResource } from 'solid-js';
import Card from '../components/Card';
import Product from '../components/Product';
import { fetchProducts } from '../util';

const Home: Component = () => {
    const [products] = createResource(fetchProducts);

    return (
        <Show when={products()} fallback={<div class="loader" />}>
            <div class="grid grid-cols-4 gap-10 my-4">
                <For each={products()}>
                    {(product) => (
                        <Card flat={false} rounded={true}>
                            <Product product={product} />
                        </Card>
                    )}
                </For>
            </div>
        </Show>
    );
};

export default Home;
