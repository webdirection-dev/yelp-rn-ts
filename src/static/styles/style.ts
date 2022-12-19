import {StyleSheet} from "react-native"
import {bgGeneral} from "./var"
import {TStyles} from "../types/types"

export const stylesApp = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        // paddingBottom: 40,
        backgroundColor: '#fec3d7'
    },
})

//SHADOW
export const containerShadow = {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: .2,
    elevation: 3,
    backgroundColor: bgGeneral,
}

//POSITION
export const centerItem = {
    justifyContent: 'center',
    alignItems: "center",
} as TStyles
