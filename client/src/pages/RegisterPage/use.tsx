import { useRegisterMutation } from "../../api"
import { IRegisterFormValues } from "./components/RegisterForm/types"

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

    const onRegistrationSubmit = (values: IRegisterFormValues) => registerUser(values)

    return {
        isUninitialized,
        isLoading,
        onRegistrationSubmit
    }
}