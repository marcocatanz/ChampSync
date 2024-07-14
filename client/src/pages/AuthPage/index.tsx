import React from "react";
import './style.css'
import { RegisterForm, LoginForm, LoadingView} from "./components";
import { use } from "./use";
const AuthPage: React.FC = () => {
    const{
        form,
        isLoading,
        onRegistrationSubmit,
        onLoginSubmit
    } = use()
    const render = () => {
        if(isLoading) return <LoadingView />
        if(form == 'register') return <RegisterForm onSubmit={onRegistrationSubmit}/>
        return <LoginForm onSubmit={onLoginSubmit}/>
    }
    return (
        <div className="register-container">
            <div className="register-decoration" />
            {render()}
        </div>
    )
}

export {AuthPage}