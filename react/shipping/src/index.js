import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import KoreaIndexPage from "./pages/korea/KoreaIndexPage";
import OverseasIndexPage from "./pages/overseas/OverseasIndexPage";
import OverSeasListPage from "./pages/overseas/OverSeasListPage";
import IndexPage from "./pages/IndexPage";
import KoreaListPage from "./pages/korea/KoreaListPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<IndexPage />} />
            <Route path={"/korea"} element={<KoreaIndexPage />} />
            <Route path={"/korea/list"} element={<KoreaListPage />} />
            <Route path={"/overseas"} element={<OverseasIndexPage />} />
            <Route path={"/overseas/list"} element={<OverSeasListPage />} />
        </Routes>
    </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
