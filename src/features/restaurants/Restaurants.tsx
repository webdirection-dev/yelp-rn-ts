import {Text, View, ActivityIndicator} from "react-native"
import {stylesRestaurants} from "./style"
import {useGetRestaurantsQuery} from "./restaurantApi"

const Restaurants = () => {
    const {container, header} = stylesRestaurants
    const {data, isLoading} = useGetRestaurantsQuery()

    console.log(data && data.businesses[0].id)

    return(
        <View style={container}>
            <Text style={header}>Top Restaurants</Text>

            {!isLoading ? <Text>Test</Text>
            : <ActivityIndicator size="large" color='white'/>}
        </View>
    )
}
export default Restaurants
