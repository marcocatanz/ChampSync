import { configureStore} from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { api } from '../api'
import { authReducer} from './auth'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'


const store = configureStore({
  reducer: {
    api: api.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  }).concat(api.middleware),
})

const persistor = persistStore(store)

export const StoreProvider = ({children}:{children: ReactNode}) => {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
    )
}


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch