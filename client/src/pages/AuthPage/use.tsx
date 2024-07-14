import { IRegisterFormValues } from "./components/RegisterForm/types"
import { ILoginFormValues } from "./components/LoginForm/types"
import { useAuth } from "../../hooks"

export const use = () => {
    const currentPath = window.location.pathname
    const form: 'register' | 'login' = currentPath == '/register'
        ? 'register'
        : 'login'
    const {
        login,
        register,
        isLoading
    } = useAuth()
    
    const onRegistrationSubmit = (values: IRegisterFormValues) => register(values)
    const onLoginSubmit = (values: ILoginFormValues) => login(values)
    return {
        form,
        currentPath,
        isLoading,
        onRegistrationSubmit,
        onLoginSubmit
    }
}