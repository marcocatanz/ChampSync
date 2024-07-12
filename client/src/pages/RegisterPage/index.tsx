import React from "react";
import './style.css'
import { RegisterForm, LoadingView} from "./components";
import { use } from "./use";
const RegisterPage: React.FC = () => {
    const{
        isLoading,
        onRegistrationSubmit
    } = use()
    const render = () => {
        if(isLoading) return <LoadingView />
        return <RegisterForm onSubmit={onRegistrationSubmit}/>
    }
    return (
        <div className="register-container">
            <div className="register-decoration" />
            {render()}
        </div>
    )
}

export {RegisterPage}
