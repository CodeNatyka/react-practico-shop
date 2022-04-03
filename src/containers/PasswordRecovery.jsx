import React from 'react';
import '../styles/PasswordRecovery.scss';
import Header from '../components/Header';
import email from '../../public/assets/icons/email.svg';
import logo from '../../public/assets/logo/logo_yard_sale.svg';

const PasswordRecovery = () => {
    return (
        <div className="login">
            <div className="form-container_recovery">
                <img src={logo} alt='logo' className='logo' />

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">
                    Please check your inbox for instructions on how to reset the password
                </p>

                <div className="email-image">
                    <img src={email} alt='email' />
                </div>

                <button className="primary-button login-button">Login</button>

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default PasswordRecovery;