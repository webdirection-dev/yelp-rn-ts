import {Text, View} from "react-native"
import {stylesHeader} from "./style"
import Search from "../../components/search/Search"

const Header = () => {
    const {container, title, subtitle} = stylesHeader

    return(
        <View style={container}>
            <Text style={subtitle}>Grab your</Text>
            <Text style={title}>delicious meal!</Text>
            <Search />
        </View>
    )
}
export default Header
