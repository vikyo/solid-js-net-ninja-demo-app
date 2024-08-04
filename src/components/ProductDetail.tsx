import { useParams } from '@solidjs/router';
import {
    Component,
    Match,
    Show,
    Switch,
    createResource,
    createSignal,
} from 'solid-js';
import { useCartContext } from '../context/CartContext';
import { CartItem, ProductDetailUseParamsProps } from '../interfaces';
import { fetchProductById } from '../util';

const ProductDetail: Component = () => {
    const params = useParams<ProductDetailUseParamsProps>();
    const [product] = createResource(() => +params.id, fetchProductById);
    const { items, setItems } = useCartContext();
    const [getAdding, setAdding] = createSignal<boolean>(false);

    const addProduct = () => {
        setAdding(true);
        setTimeout(() => {
            setAdding(false);
        }, 1000);
        const exists = items.find((p) => p.id === product()?.id);
        if (exists) {
            setItems(
                (p) => p.id === product()?.id,
                'qty',
                (q) => +q + 1
            );
        } else {
            setItems([...items, { ...product(), qty: 1 } as CartItem]);
        }
    };

    return (
        <Switch>
            <Match when={product.loading}>
                <div class="loader" />
            </Match>
            <Match when={product.error}>
                <span>Error: {product?.error?.message}</span>
            </Match>
            <Match when={!product()}>
                <div>No product found</div>
            </Match>
            <Match when={product()}>
                <div class="my-7">
                    <div class="grid grid-cols-5 gap-7">
                        <div class="col-span-2">
                            <img src={product()?.img} alt="product image" />
                        </div>

                        <div class="col-span-3">
                            <h2 class="text-3xl font-bold mb-7">
                                {product()?.title}
                            </h2>
                            <p>{product()?.description}</p>
                            <p class="my-7 text-2xl">
                                Only ${product()?.price}
                            </p>
                            <button
                                class="btn"
                                onClick={addProduct}
                                disabled={getAdding()}
                            >
                                Add to Cart
                            </button>
                            <Show when={getAdding()}>
                                <div class="m-2 p-2 border-amber-500 border-2 rounded-md inline-block">
                                    {product()?.title} was added to the cart
                                </div>
                            </Show>
                        </div>
                    </div>
                </div>
            </Match>
        </Switch>
    );
};

export default ProductDetail;
