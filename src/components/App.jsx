import React from 'react'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import PasswordRecovery from '../containers/PasswordRecovery';
import '../styles/global.css';

const App = () => {
    return (
        <Layout>
            <Login />
            <PasswordRecovery></PasswordRecovery>
        </Layout>
    );
};

export default App;