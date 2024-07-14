import { Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import './style.css'
import { useForm } from "react-hook-form";
import { ILoginFormValues } from './types';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({onSubmit} : {onSubmit: (values: ILoginFormValues) => void}) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid}
    } = useForm<ILoginFormValues>({mode: 'onBlur'})
    
    return (
        <div className="login-form-container">
            <div className="register-form-header">
                <h1>Sign In</h1>
            </div>
            <form className="login-form-body" onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.email ? true : false}>
                    <Input 
                        placeholder='Email Address' 
                        size={'lg'} 
                        {...register('email', {
                            required: 'This is Required', 
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Please enter a valid email',
                            }
                        }
                        )}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password ? true : false}>
                    <Input 
                        placeholder='Password' 
                        size={'lg'}
                        type={'password'}
                        {...register('password', {required: 'This is Required'})}
                    />
                    <FormErrorMessage>
                        {errors.password && errors.password.message}
                    </FormErrorMessage>
                </FormControl>
                <Button  colorScheme="purple" type="submit" isLoading={isSubmitting} isDisabled={!isValid}>Login</Button>
                <Button onClick={()=>navigate('/register')} variant={'ghost'}>
                    Don't have an account? Register Here
                </Button> 
            </form>
        </div> 
    )
}

export {LoginForm}