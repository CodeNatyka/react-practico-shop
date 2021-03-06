import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PasswordRecovery from '../pages/PasswordRecovery';
import CreateAccount from '../pages/CreateAccount';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import SendEmail from '../pages/SendEmail';
import Layout from '../containers/Layout';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import Login from '../pages/Login';
import Home from '../pages/Home';
import '../styles/global.css';

// uso de React Context: pasa estado de la App a quien lo necesite
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


const App = () => {
    const initialState = useInitialState(); //Este hook retorna state y addToCart
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter basename="/react-practico-shop">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Navigate to="/" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/account" element={<MyAccount />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/signup" element={<CreateAccount />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/new-password" element={<NewPassword />} />
                        <Route path="/password-recovery" element={<PasswordRecovery />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;