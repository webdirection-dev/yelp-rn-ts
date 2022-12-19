import {StyleSheet} from "react-native"
import {containerShadow, centerItem} from "../../static/styles/style"

export const stylesRestaurantItem = StyleSheet.create({
    container: {
        ...containerShadow,
        shadowOffset: {width: 0, height: 4},
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },
    img: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    title: {fontWeight: 'bold', textTransform: 'capitalize', fontSize: 18, marginBottom: 4},
    info: {
        flexDirection: 'row',
    },
    rating: {marginRight: 20},
    money: {color: 'orange'},
})
