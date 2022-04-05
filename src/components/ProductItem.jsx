import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import add_to_cart from '../../public/assets/icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    const [cart, setCart] = useState([]);

    const handleCart = () => {
        setCart('clic')
    }

    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>$ {product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleCart}>
                    <img src={add_to_cart} alt="add to cart" />
                </figure>
                {cart}
            </div>
        </div>
    );
};

export default ProductItem;