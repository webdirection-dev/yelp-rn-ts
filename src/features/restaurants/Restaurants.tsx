import {useEffect, useState} from "react"
import {useAppSelector} from "../../store"
import {selectSearchInfo} from "../search/search-slice"
import {Text, View, ActivityIndicator, FlatList} from "react-native"
import {stylesRestaurants} from "./style"
import RestaurantItem from "../../components/restaurantItem/RestaurantItem"
import {useGetRestaurantsQuery} from "./restaurantApi"
import {IErrorUseQuery} from "../../static/types/types"

const Restaurants = () => {
    const {search} = useAppSelector(store => selectSearchInfo(store))
    const [term, setTerm] = useState('')
    const {container, header} = stylesRestaurants
    const {data, isLoading, isError, error} = useGetRestaurantsQuery(term)

    useEffect(() => {
        setTerm(search)
    }, [search])

    if (isError && error) {
        const {status, data: {error: {code, description}}} = error as IErrorUseQuery
        return (
            <View>
                <Text style={header}>Top Restaurants</Text>
                <Text>{status}: {code}</Text>
                <Text>{description}</Text>
            </View>
        )
    }
    return(
        <View style={container}>
            <Text style={header}>Top Restaurants</Text>
            {isLoading ? <ActivityIndicator size="large" color='white'/> : (
                <FlatList
                    data={data && data.businesses}
                    renderItem={i => <RestaurantItem item={i.item}/>}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={i => i.id}
                />
            )}
        </View>
    )
}
export default Restaurants
