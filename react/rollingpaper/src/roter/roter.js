import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import IndexPage from "../pages/IndexPage";
import ListPage from "../pages/ListPage";
import RegisterPage from "../pages/RegisterPage";


const loading = 'Loading......'
const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={loading}><IndexPage /></Suspense>
    }, {
        path: '/list',
        element: <Suspense fallback={loading}><ListPage /></Suspense>
    }, {
        path: '/register',
        element: <Suspense fallback={loading}><RegisterPage /></Suspense>
    }
])


export default routerConfig;