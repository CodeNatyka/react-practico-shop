import React from 'react';
import '../styles/ProductList.scss';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const products = useGetProducts(API);

    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}

                {/* Esta es otra manera usando corchetes */}
                {/* {products.map((product) => {
                    return <ProductItem />;
                })} */}
            </div>
        </section>
    );
};

export default ProductList;