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
                        {item.title} - ${item.price} x {item.qty}
                    </p>
                )}
            </For>
        </>
    );
};

export default Cart;
