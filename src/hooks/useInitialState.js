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

    const removeFromCart = (payload) => {
        setState({
            ...state,
            // cart: state.cart.filter(items=> items.id !== payload),
            // Corrige productos duplicados   paso 3/3
            cart: state.cart.filter((product,index) => index !== payload),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    };
}

export default useInitialState;