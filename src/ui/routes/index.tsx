import { lazy, Suspense } from "react"
import Loader from "../components/Loader/Loader"
import { Route, Routes } from "react-router-dom"

import routes from './routes'

const Sample = lazy(() => 
    import('@ui/pages/Sample').then(({ Sample }) => ({
        default: Sample,
    })),
);

const Login = lazy(() => 
    import('@ui/pages/Login').then(({ Login }) => ({
        default: Login,
    })),
);

const Routing = () =>{
    return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path={routes.LOGIN} element={<Login/>}/>
            <Route path={routes.SAMPLE} element={<Sample/>}/>
        </Routes>
    </Suspense>
)};

export default Routing;