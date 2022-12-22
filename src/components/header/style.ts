import {StyleSheet} from "react-native"
import {h1, h2} from "../../static/styles/mixins"

export const stylesHeader = StyleSheet.create({
    container: {marginTop: 20, paddingHorizontal: 25},
    title: {...h1, textAlign: "center"},
    subtitle: h2,
})
