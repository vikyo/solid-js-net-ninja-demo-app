import { useParams } from '@solidjs/router';
import { Component, Match, Switch, createResource } from 'solid-js';
import { ProductDetailUseParamsProps } from '../interfaces';
import { fetchProductById } from '../util';

const ProductDetail: Component = () => {
    const params = useParams<ProductDetailUseParamsProps>();
    const [product] = createResource(() => +params.id, fetchProductById);

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
                                Only £{product()?.price}
                            </p>
                        </div>
                    </div>
                </div>
            </Match>
        </Switch>
    );
};

export default ProductDetail;
