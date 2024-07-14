import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { auth } from "../store/auth";
import { useLoginMutation, useRegisterMutation } from "../api";
import { ILoginFormValues } from "../pages/AuthPage/components/LoginForm/types";
import { IRegisterFormValues } from "../pages/RegisterPage/components/RegisterForm/types";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export const useAuth = () => {
    const state = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch()
    const toast = useToast()
    const [
        triggerRegisterRequest, 
        {
            data: registerData, 
            error: registerError, 
            isLoading: isRegistering, 
            isError: registerFailed, 
            isSuccess: registerSucceeded
        }
    ] = useRegisterMutation()
    const [
        triggerLoginRequest,
        {
            data: loginData,
            error: loginError,
            isLoading: isLoggingIn,
            isError: loginFailed,
            isSuccess: loginSucceeded
        }
    ] = useLoginMutation()

    const isLoading: boolean = isLoggingIn || isRegistering
    const isError: boolean = loginFailed || registerFailed
    const isSuccess: boolean = loginSucceeded || registerSucceeded
    const login = (values: ILoginFormValues) => {
        triggerLoginRequest(values)
    }
    const register = (values: IRegisterFormValues) => {
        triggerRegisterRequest(values)
    }

    useEffect(() => {
        if(registerSucceeded){
            dispatch(
                auth.actions.onLogin(registerData)
            )
            toast({
                title: "Sign Up Success",
                description: "Welcome to ChampSynnc",
                isClosable: true,
                status: 'success',
                duration: 9000
            })
        }
        if(loginSucceeded){
            dispatch(
                auth.actions.onLogin(loginData)
            )
            toast({
                title: "Logged In",
                description: "Welcome back!",
                isClosable: true,
                status: 'success',
                duration: 9000
            })
        }
        if(loginFailed){
            toast({
                title: "Login Failed",
                description: loginError.error || loginError.status,
                isClosable: true,
                status: 'error',
                duration: 9000
            })
        }
        if(registerFailed){
            toast({
                title: "Sign Up Failed",
                description: registerError.error || registerError.status,
                isClosable: true,
                status: 'error',
                duration: 9000
            })
        }
    },[
        loginSucceeded, 
        registerSucceeded,
        loginFailed,
        registerFailed
    ])

    return {
        ...state, 
        isLoading,
        isError,
        isSuccess,
        login,
        register
    }
}