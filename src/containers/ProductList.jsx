import React, { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(response.data);
        }
        fetchData();
    }, []);

    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map(product => (
                    <ProductItem product={product} />
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