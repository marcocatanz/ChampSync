import { useEffect } from "react"
import { useRegisterMutation } from "../../api"
import { IRegisterFormValues } from "./components/RegisterForm/types"
import { useToast } from "@chakra-ui/react"
import { useAuth } from "../../hooks"

export const use = () => {
    const {
        onLogin
    } = useAuth()
    const [
        registerUser, 
        {
            data, 
            error, 
            isUninitialized,
            isLoading, 
            isError, 
            isSuccess
        }
    ] = useRegisterMutation()
    const toast = useToast()

    useEffect(() => {
        if(isError){
            toast({
                title: "Sign Up Failed",
                description: error.error || error.status,
                isClosable: true,
                status: 'error',
                duration: 9000
            })
        }
        if(isSuccess){
            toast({
                title: "Sign Up Success",
                description: "Welcome to ChampSynnc",
                isClosable: true,
                status: 'success',
                duration: 9000
            })
            onLogin(data)
        }
    }, [isError, isSuccess])

    const onRegistrationSubmit = (values: IRegisterFormValues) => registerUser(values)
    return {
        isUninitialized,
        isLoading,
        onRegistrationSubmit
    }
}