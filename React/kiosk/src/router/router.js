import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import IndexPage from "../pages/kiosk/IndexPage";
import ListPage from "../pages/kiosk/ListPage";
import DetailPage from "../pages/kiosk/DetailPage";
import RegisterPage from "../pages/kiosk/RegisterPage";
import ReservationPage from "../pages/kiosk/ReservationPage";
import KioskLayout from "../components/layout/KioskLayout";


const loading = <p>Loading...</p>
const routerConfig = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={loading}><IndexPage /></Suspense>
    }, {
        path: 'kiosk',
        element: <KioskLayout />,
        children: [
            {
                path: 'list',
                element: <Suspense fallback={loading}><ListPage /></Suspense>
            },
            {
                path: ':id',
                element: <Suspense fallback={loading}><DetailPage /></Suspense>
            }, {
                path: 'register',
                element: <Suspense fallback={loading}><RegisterPage /></Suspense>
            }, {
                path: 'reservation',
                element: <Suspense fallback={loading}><ReservationPage /></Suspense>
            }
        ]
    }
])


export default routerConfig;