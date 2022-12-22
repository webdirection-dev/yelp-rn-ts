import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const PATH = process.env.REACT_APP_PATH
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
import {IRestaurantItem, IRestaurantByID} from "../../static/types/types"

interface IRestaurant {
    businesses: IRestaurantItem[]
}

export const restaurantsApi = createApi({
    reducerPath: 'restaurantsApi',
    baseQuery: fetchBaseQuery({baseUrl: PATH}),
    endpoints: (build) => ({
        getRestaurants: build.query<IRestaurant, string>({
            query: (term) => ({
                url: `/search?limit=10&location=toronto${term ? '&term='+term : ''}`,
                headers: {Authorization: `Bearer ${REACT_APP_API_KEY}`}
            })
        }),

        getRestaurantById: build.query<IRestaurantByID, string>({
            query: (id) => ({
                url: `/${id}`,
                headers: {Authorization: `Bearer ${REACT_APP_API_KEY}`}
            })
        })
    }),
})

export const {useGetRestaurantsQuery, useGetRestaurantByIdQuery} = restaurantsApi
