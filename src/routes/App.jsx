import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PasswordRecovery from '../containers/PasswordRecovery';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/password-recovery" element={<PasswordRecovery />} />
                    <Route path="*" element={
                    <div style={{ padding: "1rem" }}><p>There's nothing here!</p></div>
                    }
                    />

                    {/* ----------------  otros ejemplos -----------------*/}
                    {/* <Route path="/path/:parametro" element={<Posts/>} />
                    <Route path="/anidamiento/*" element={<Dashboard/>}>
                        <Route path="ruta1" element={<Users/>} />
                        <Route path="ruta2" element={<Posts/>} />
                    </Route> */}
                    {/* ejemplos con redirect ahora (rrdom-6) es navigate */}
                    {/* <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" />} /> */}

                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;