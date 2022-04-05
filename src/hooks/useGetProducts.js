import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(response.data);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return products;
};

export default useGetProducts;