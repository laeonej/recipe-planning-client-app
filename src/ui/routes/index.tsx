import { lazy, Suspense, useContext } from "react"
import Loader from "../components/Loader/Loader"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import routes from './routes'
import { AuthContext } from "@src/ui/contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
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

// TODO: Update when view recipe page is created
const Recipe = lazy(() => 
    import('@ui/pages/Sample').then(({ Sample }) => ({
        default: Sample,
    }))
);

const PrivateRoutes = () => {
    const data = useGetAuth();
    const { setAuthenticated } = useContext(AuthContext);
    const { setUser } = useContext(UserContext)
    if (!data) {
        setAuthenticated(false);
        setUser(-1);
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
            <Route path={routes.RECIPE} element={<Recipe/>}/>
            <Route element={<PrivateRoutes/>}>
                <Route path={routes.ROOT} element={<Sample/>}/>
            </Route>
        </Routes>
    </Suspense>
)};

export default Routing;