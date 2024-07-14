import { createBrowserRouter, Navigate} from "react-router-dom"
import { Layout } from "./Layout"
import { LandingPage, RegisterPage} from "./pages"
import { useSelector } from "react-redux"
import { AuthPage } from "./pages/AuthPage"
import { RootState } from "./store"


type ProtectedRouteProps = {
    element: JSX.Element;
    require: 'unauthenticated' | 'authenticated'
    redirect: string;
}
const ProtectedRoute = (props: ProtectedRouteProps) => {
    const {
        element,
        redirect,
        require
    } = props
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);
    const validated = 
        require == 'authenticated' 
            ? isAuthenticated
            : !isAuthenticated

    console.log('validated',validated)
    if(validated) return element
    return <Navigate to={redirect} />
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <LandingPage />},
            {
                path: '/register', 
                element: <ProtectedRoute require="unauthenticated" redirect="/" element={<AuthPage />}/>
            },
            {
                path: '/login', 
                element: <ProtectedRoute require="unauthenticated" redirect="/" element={<AuthPage />}/>
            }
        ]
    },

])

export default router