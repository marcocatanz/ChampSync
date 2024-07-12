import { configureStore } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { api } from '../api'

const store = configureStore({
  reducer: {
    api: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export const StoreProvider = ({children}:{children: ReactNode}) => {
    return (
        <Provider store={store}>
          {children}
        </Provider>
    )
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch