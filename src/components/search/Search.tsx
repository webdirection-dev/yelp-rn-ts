import {TextInput, View} from "react-native"
import {Ionicons} from '@expo/vector-icons'
import {stylesSearch} from "./style"

const Search = () => {
    const {container, input} = stylesSearch

    return(
        <View style={container}>
            <Ionicons name="search" size={25} color="gray" />
            <TextInput placeholder='restaurants, food' style={input}/>
        </View>
    )
}
export default Search
