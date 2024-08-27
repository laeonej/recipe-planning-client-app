import { lazy, Suspense, useEffect } from "react"
import Loader from "../components/Loader/Loader"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import routes from './routes'
import useGetAuth from "../hooks/useGetAuth";
import { useAuthStore, useUserStore } from '@ui/states';

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
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={routes.LOGIN} replace/>;
    }
    
    return (
        <Outlet/>
    )
}

const Routing = () => {
    const { data } = useGetAuth();
    const setAuthed = useAuthStore((state) => state.setAuthed);
    const setUserId = useUserStore((state) => state.setUserId);
    useEffect(() => {
        if (data !== null && data !== undefined) {
            setAuthed(true);
            setUserId(data.user_id);
        }
    }, [data, setAuthed, setUserId])

    return (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path={routes.LOGIN} element={<Login/>}/>
            <Route path={routes.ROOT} element={<Sample/>}/>
            <Route path={routes.SIGNUP} element={<Signup/>}/>
            <Route path={routes.RECIPE} element={<Recipe/>}/>
            <Route element={<PrivateRoutes/>}>
                <Route path={routes.SAMPLE} element={<Sample/>}/>
            </Route>
        </Routes>
    </Suspense>
)};

export default Routing;