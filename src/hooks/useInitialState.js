import { useState } from 'react';

const initialState = {
    cart: [],
}

/**
 * Custom Hook para pasar estado mediante Context
 * @returns state, addToCart
 */
const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [
                ...state.cart,
                payload
            ]
        });
    };

    return {
        state,
        addToCart
    };
}

export default useInitialState;