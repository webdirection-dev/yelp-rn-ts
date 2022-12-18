import {StyleSheet} from "react-native"
import {containerShadow, centerItem} from "../../static/styles/style"
import {bgGeneral} from "../../static/styles/var"

export const stylesCategoryItem = StyleSheet.create({
    container: {
        ...containerShadow,
        ...centerItem,
        width: 70,
        height: 100,
        borderRadius: 50,
        marginRight: 17
    },
    imgContainer: {
        ...centerItem,
        width: 50,
        height: 50,
        backgroundColor: bgGeneral,
        borderRadius: 50,
        marginBottom: 5
    },
    img: {
        width: 35,
        height: 35,
    },
    titleS: {fontWeight: 'bold', textTransform: 'capitalize'}
})
