import {StyleSheet} from "react-native"
import {generalColor} from "../../static/styles/var"
import {Dimensions} from "react-native"
const dimensions = Dimensions.get('window')

export const stylesRestaurantScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: generalColor,
    },
    wrapper: {
        // paddingTop: 50
    },
    img: {
        width: dimensions.width,
        height: Math.round((dimensions.width * 9) / 16),
    }
})
