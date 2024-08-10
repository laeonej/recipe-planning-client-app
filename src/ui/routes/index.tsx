import { lazy, Suspense, useContext } from "react"
import Loader from "../components/Loader/Loader"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import routes from './routes'
import { AuthContext } from "@src/ui/contexts/AuthContext";
import useGetAuth from "@ui/hooks/useGetAuth";

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

const Signup = lazy(() => 
    import('@ui/pages/Signup').then(({ Signup }) => ({
        default: Signup,
    })),
);

const PrivateRoutes = () => {
    const data = useGetAuth();
    const { setAuthenticated } = useContext(AuthContext);
    if (!data) {
        setAuthenticated(false);
        return <Navigate to={routes.LOGIN} replace/>;
    }

    return <Outlet/>
}

const Routing = () =>{
    return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path={routes.LOGIN} element={<Login/>}/>
            <Route path={routes.SAMPLE} element={<Sample/>}/>
            <Route path={routes.SIGNUP} element={<Signup/>}/>
            <Route element={<PrivateRoutes/>}>
                <Route path={routes.ROOT} element={<Sample/>}/>
            </Route>
        </Routes>
    </Suspense>
)};

export default Routing;