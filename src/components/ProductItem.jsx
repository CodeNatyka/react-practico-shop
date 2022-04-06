import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import add_to_cart_image from '../assets/icons/bt_add_to_cart.svg';

// Conexion con context
import AppContext from '../context/AppContext';


const ProductItem = ({ product }) => {
    // Esto fue un ejemplo de como usar useState
    // const [cart, setCart] = useState([]);
    // const handleCart = () => {
    //     setCart('clic')
    // }

    // Ahora usaremos useContext para tener acceso al estado directamente
    const { addToCart } = useContext(AppContext);

    const handleCart = (item) => {
        addToCart(item);
        console.log(item)
    }

    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>$ {product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleCart(product)}>
                    <img src={add_to_cart_image} alt="add to cart" />
                </figure>
                {/* Esto fue para el ejemplo de useState*/}
                {/* {cart} */}
            </div>
        </div>
    );
};

export default ProductItem;