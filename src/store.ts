import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"
import {searchReducer} from "./features/search/search-slice"
import {restaurantsApi} from "./features/restaurants/restaurantApi"

export const store = configureStore({
    reducer: {
        searchReducer,
        [restaurantsApi.reducerPath]: restaurantsApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(restaurantsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
