import { Component, For } from 'solid-js';
import { useCartContext } from '../context/CartContext';
import { CartItem } from '../interfaces';

const Cart: Component = () => {
    const { items } = useCartContext();

    return (
        <>
            <div>Shopping cart</div>
            <For each={items}>
                {(item: CartItem) => (
                    <p>
                        {item.price} - {item.title}
                    </p>
                )}
            </For>
        </>
    );
};

export default Cart;
