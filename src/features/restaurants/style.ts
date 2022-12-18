import {StyleSheet} from "react-native"
import {h3} from "../../static/styles/mixins"

export const stylesRestaurants = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red'
    },
    header: {
        ...h3,
        paddingBottom: 10
    }
})
