import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/kiosk/IndexPage";
import ListPage from "./pages/kiosk/ListPage";
import RegisterPage from "./pages/kiosk/RegisterPage";
import ReservationPage from "./pages/kiosk/ReservationPage";
import DetailPage from "./pages/kiosk/DetailPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<IndexPage />} />
            <Route path={"/kiosk"} element={<ListPage />} />
            <Route path={"/kiosk/:id"} element={<DetailPage />} />
            <Route path={"/kiosk/register"} element={<RegisterPage />} />
            <Route path={"/kiosk/reservation"} element={<ReservationPage />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
