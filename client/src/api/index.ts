import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IRegisterFormValues } from '../pages/RegisterPage/components/RegisterForm/types';
import { ILoginFormValues } from '../pages/AuthPage/components/LoginForm/types';
const baseUrl: string = import.meta.env.VITE_BACKEND_URL + 'api/';
const password: string = import.meta.env.VITE_DEMO_USER_PASSWORD;

export interface IRegisterResponse {
}
export interface ILoginResponse {
}
export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({
        register: build.mutation<IRegisterResponse, IRegisterFormValues>({
           query: (body) => ({
                url: "auth/register",
                method: 'POST',
                body: {...body, password}
           }) 
        }),
        login: build.mutation<ILoginResponse, ILoginFormValues>({
            query: (body) => ({
                url: "auth/login",
                method: 'POST',
                body
           })            
        })
    })
})

const useRegisterMutation: typeof api.endpoints.register.useMutation = api.endpoints.register.useMutation
const useLoginMutation: typeof api.endpoints.login.useMutation = api.endpoints.login.useMutation
export {
    useRegisterMutation,
    useLoginMutation
}
