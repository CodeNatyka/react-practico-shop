import React from 'react';
import '@styles/Header.scss';
import { Link } from "react-router-dom";
import logo from '@logos/logo_yard_sale.svg';
import icon_menu from '@icons/icon_menu.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    return (
        <nav>
            <img src={icon_menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt='logo' className='logo-nav' />
                <ul>
                    <li>
                        <Link to="/">All</Link>
                    </li>
                    <li>
                        <Link to="/">Clothes</Link>
                    </li>
                    <li>
                        <Link to="/">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/">Furnitures</Link>
                    </li>
                    <li>
                        <Link to="/">Toys</Link>
                    </li>
                    <li>
                        <Link to="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={shopping_cart} alt='shopping cart' />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Header;