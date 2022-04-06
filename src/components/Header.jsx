import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import MyOrder from '../containers/MyOrder';
import logo from '@logos/logo_yard_sale.svg';
import icon_menu from '@icons/icon_menu.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';
import '@styles/Header.scss';
import Menu from './Menu';

// Conexion con context
import AppContext from '../context/AppContext';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleMenu = () => {
        setToggle(!toggle)
    }

    return (
        <nav>
            <img src={icon_menu} alt='menu' className='menu' />
            <div className='navbar-left'>
                <img src={logo} alt='logo' className='logo-nav' />
                <ul>
                    <li><Link to='/'>All</Link></li>
                    <li><Link to='/'>Clothes</Link></li>
                    <li><Link to='/'>Electronics</Link></li>
                    <li><Link to='/'>Furnitures</Link></li>
                    <li><Link to='/'>Toys</Link></li>
                    <li><Link to='/'>Others</Link></li>
                </ul>
            </div>
            <div className='navbar-right'>
                <ul>
                    <li className='navbar-email' onClick={handleMenu} >
                        platzi@example.com
                    </li>
                    <li className='navbar-shopping-cart'
                        onClick={() => setToggleOrders(!toggleOrders)}
                    >
                        <img src={shopping_cart} alt='shopping cart' />
                        {state.cart.length > 0 && <div>{state.cart.length}</div>}
                    </li>
                </ul>
            </div>
            {/* {toggle ? <Menu /> : null} */}
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}

        </nav>
    );
};

export default Header;