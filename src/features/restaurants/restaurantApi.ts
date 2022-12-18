import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const PATH = process.env.REACT_APP_PATH
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

interface IRestaurant {
    businesses: {[key: string]: string}[]
}

export const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        getRestaurants: build.query<IRestaurant, void>({
            query: () => ({
                url: `/search?limit=10&location=toronto`,
                headers: {Authorization: `Bearer ${REACT_APP_API_KEY}`}
            })
        })
    }),
})

export const {useGetRestaurantsQuery} = restaurantsApi
