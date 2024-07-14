import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { auth } from "../store/auth";

export const useAuth = () => {
    const state = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch()
    const onLogin = (payload: any) => dispatch(auth.actions.onLogin(payload))
    const onLogout = () => dispatch(auth.actions.onLogout())
    return {
        ...state,
        onLogin,
        onLogout
    }
}