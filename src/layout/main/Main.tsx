import {View} from "react-native"
import {stylesMain} from "./style"
import Restaurants from "../../features/restaurants/Restaurants"

const Maim = () => {
    const {container} = stylesMain

    return(
        <View style={container}>
            <Restaurants />
        </View>
    )
}
export default Maim
