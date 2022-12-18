import {TextInput, View} from "react-native"
import {Ionicons} from '@expo/vector-icons'
import {stylesSearch} from "./style"
import {useAppDispatch, useAppSelector} from "../../store"
import {clearSearch, setSearch, setCategory, selectSearchInfo} from "./search-slice"

const Search = () => {
    const dispatch = useAppDispatch()
    const {search} = useAppSelector(store => selectSearchInfo(store))
    const {container, input} = stylesSearch

    return(
        <View style={container}>
            <Ionicons name="search" size={25} color="gray" />

            <TextInput
                placeholder='restaurants, food'
                style={input}
                value={search}
                onChangeText={txt => dispatch(setSearch(txt.trim()))}
                onEndEditing={() => search && dispatch(setCategory(search.trim().toLowerCase()))}
            />

            <Ionicons
                name="close-sharp"
                size={25} color={search === '' ? 'white' : 'gray'}
                disabled={search === ''}
                onPress={() => dispatch(clearSearch())}
            />
        </View>
    )
}
export default Search
