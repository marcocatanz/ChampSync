import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

export interface AuthState {
    isAuthenticated: boolean,
    currentUser: {
        email: string,
        firstName: string,
        lastName: string,
        token: string
    } | null
}
const initialState: AuthState = {
    isAuthenticated: false,
    currentUser: null
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLogin(state, action){
            state.isAuthenticated = true
            state.currentUser = action.payload
        },
        onLogout(state){
            state.isAuthenticated = false,
            state.currentUser = null
        }
    }
})
const persistConfig = {
    key: 'auth',
    storage,
  }
export const authReducer = persistReducer(persistConfig, auth.reducer)
export const {
    onLogin,
    onLogout
} = auth.actions

