import {Text, View} from "react-native"
import {stylesHomeScreen} from "./style"

import Header from "../../components/header/Header"
import Category from "../../components/category/Category"
import Restaurants from "../../features/restaurants/Restaurants"

const HomeScreen = () => {
    const {container, restaurantsList, listTitle} = stylesHomeScreen

    return (
        <View style={container}>
            <Header />
            <Category />
            <View style={restaurantsList}>
                <Text style={listTitle}>Top Restaurants</Text>
                <Restaurants />
            </View>
        </View>
    )
}
export default HomeScreen
