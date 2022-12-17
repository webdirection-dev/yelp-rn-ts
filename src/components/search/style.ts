import {StyleSheet} from "react-native"
import {containerShadow} from "../../static/styles/style"

export const stylesSearch = StyleSheet.create({
    container: {
        ...containerShadow,
        flexDirection: "row",
        marginTop: 20,
        padding:10,
        borderRadius: 20,
    },
     input: {
        fontSize: 20,
        marginLeft: 5,
     }
})
