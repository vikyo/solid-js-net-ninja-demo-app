import { A } from '@solidjs/router';
import { Component } from 'solid-js';
import { ProductProps } from '../interfaces';

const Product: Component<ProductProps> = (props) => {
    return (
        <>
            <img src={props.product.img} alt="image" />
            <h2>{props.product.title}</h2>
            <p>{props.product.description}</p>
            <p>${props.product.price}</p>
            <A href={`/product/${props.product.id}`} class="btn">
                View Product
            </A>
        </>
    );
};

export default Product;
