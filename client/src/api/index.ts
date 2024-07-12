import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const env = await import.meta.env;
const baseUrl: string = env.VITE_BACKEND_URL + '/api'
const password: string = env.VITE_DEMO_USER_PASSWORD
export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({
        register: build.mutation<any, any>({
           query: (body) => ({
                url: "auth/register",
                method: 'POST',
                body: {...body, password}
           }) 
        })
    })
})

export const { useRegisterMutation } = api

