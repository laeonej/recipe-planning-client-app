import { lazy, Suspense } from "react"
import Loader from "../components/Loader/Loader"
import { Route, Routes } from "react-router-dom"

import routes from './routes'

const Sample = lazy(() => 
    import('../pages/Sample').then(({ Sample }) => ({
        default: Sample,
    })),
);

export default () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            <Route path={routes.SAMPLE} element={<Sample/>}/>
        </Routes>
    </Suspense>
);