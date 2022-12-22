import {useEffect, useState} from "react"
import {useNavigation} from "@react-navigation/native"
import {useAppSelector} from "../../store"
import {selectSearchInfo} from "../search/search-slice"
import {useGetRestaurantsQuery} from "./restaurantApi"

export const useRestaurants = () => {
    const navigation = useNavigation()
    const {search} = useAppSelector(store => selectSearchInfo(store))
    const [term, setTerm] = useState('')
    const {data, isLoading, isError, error, isFetching} = useGetRestaurantsQuery(term)

    useEffect(() => {
        setTimeout(() => {
            setTerm(search)
        }, 700)
    }, [search])

    return {isLoading, isFetching, isError, error, data, navigation}
}
