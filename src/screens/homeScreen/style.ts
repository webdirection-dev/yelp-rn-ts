import {StyleSheet} from "react-native"
import {h3} from "../../static/styles/mixins"
import {generalColor} from "../../static/styles/var"

export const stylesHomeScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: generalColor
    },
    restaurantsList: {
        paddingHorizontal: 25,
        flex: 1,
    },
    listTitle: {
        ...h3,
        paddingBottom: 10
    }
})
