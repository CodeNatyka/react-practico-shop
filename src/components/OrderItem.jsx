import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import icon_close from '../assets/icons/icon_close.png';

// Conexion con context
import AppContext from '../context/AppContext';


const OrderItem = ({ product, indexValue }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (index) => {
        removeFromCart(index);
        console.log(index)
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={icon_close}
                className="removeItem"
                alt="close"
                // onClick={() => handleRemove(product.id)}
                // Corrige productos duplicados  paso 2/3
                onClick={() => handleRemove(indexValue)}
            />
        </div>
    );
};

export default OrderItem;