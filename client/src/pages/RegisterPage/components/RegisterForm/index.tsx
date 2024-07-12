import { Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import './style.css'
import { useForm } from "react-hook-form";
import { IRegisterFormValues } from "./types";
const RegisterForm = ({onSubmit} : {onSubmit: (values: IRegisterFormValues) => void}) => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid}
    } = useForm<IRegisterFormValues>({mode: 'onBlur'})
    
    return (
        <div className="register-form-container">
            <div className="register-form-header">
                <h1>Create a new account</h1>
            </div>
            <form className="register-form-body" onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email ? true : false}>
                    <Input 
                        placeholder='Email Address' 
                        size={'lg'} 
                        {...register('email', {
                            required: 'This is Required', 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Please enter a valid email',
                            }}
                        )}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.firstName ? true : false}>
                    <Input 
                        placeholder='First Name' 
                        size={'lg'}
                        {...register('firstName', {required: 'This is Required'})}
                    />
                    <FormErrorMessage>
                        {errors.firstName && errors.firstName.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.lastName ? true : false}>
                    <Input 
                        placeholder='Last Name' 
                        size={'lg'}
                        {...register('lastName',{required: 'This is Required'})}
                    />
                    <FormErrorMessage>
                        {errors.lastName && errors.lastName.message}
                    </FormErrorMessage>
                </FormControl>
                <Button  colorScheme="purple" type="submit" isLoading={isSubmitting} isDisabled={!isValid}>Register</Button>
            </form>
        </div> 
    )
}

export {RegisterForm}