import { createBrowserRouter} from "react-router-dom"
import { Layout } from "./Layout"
import { LandingPage, RegisterPage} from "./pages"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '/', element: <LandingPage />},
            { path: '/register', element: <RegisterPage /> }
        ]
    },

])

export default router