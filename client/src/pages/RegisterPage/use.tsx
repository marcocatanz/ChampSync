import { useEffect } from "react"
import { useRegisterMutation } from "../../api"
import { IRegisterFormValues } from "./components/RegisterForm/types"
import { useToast } from "@chakra-ui/react"

export const use = () => {
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
            console.log(error)
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
        }
    }, [isError, isSuccess])

    const onRegistrationSubmit = (values: IRegisterFormValues) => registerUser(values)
    return {
        isUninitialized,
        isLoading,
        onRegistrationSubmit
    }
}