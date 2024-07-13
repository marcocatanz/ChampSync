import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl: string = import.meta.env.VITE_BACKEND_URL + 'api/';
const password: string = import.meta.env.VITE_DEMO_USER_PASSWORD;

console.log('base url', baseUrl)
console.log('[ass', password)
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

