import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import KoreaShippingPage from "./pages/KoreaShippingPage";
import OverseasShippingPage from "./pages/OverseasShippingPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<IndexPage />} />
            <Route path={"/korea"} element={<KoreaShippingPage />} />
            <Route path={"/overseas"} element={<OverseasShippingPage />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
