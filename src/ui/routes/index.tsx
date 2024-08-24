import { lazy, Suspense, useContext, useEffect } from "react"
import Loader from "../components/Loader/Loader"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"

import routes from './routes'
import { AuthContext } from "@src/ui/contexts/AuthContext";
import useGetAuth from "../hooks/useGetAuth";
import { UserContext } from "../contexts/UserContext";

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
    const {data, isLoading} = useGetAuth();
    const { setAuthenticated } = useContext(AuthContext);
    const { setUser } = useContext(UserContext)

    useEffect(() => {
        if (data !== null && data !== undefined) {
            setUser(data.user_id)
            console.log("reached")
        }
    }, [data, setUser])

    if (isLoading) {
        return <Loader/>
    }

    if (data === null || data === undefined) {
        return <Navigate to={routes.LOGIN} replace/>;
    }
    
    
    return (
        <>
            {data && <Outlet/>}
        </>
    )
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