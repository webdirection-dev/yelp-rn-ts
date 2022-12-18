import {FlatList, View} from "react-native"
import {stylesCategory} from "./style"
import {useAppDispatch, useAppSelector} from "../../store"
import {setSearch, setCategory, selectSearchInfo} from "../../features/search/search-slice"
import CategoryItem from "../categoryItem/CategoryItem"
import {dataCategory} from "../../static/data/dataCategory"

const Category = () => {
    const dispatch = useAppDispatch()
    const {search, category} = useAppSelector(store => selectSearchInfo(store))
    const {container} = stylesCategory

    const handleSetCategory = (txt: string) => {
        dispatch(setSearch(search.toLowerCase() !== txt.toLowerCase() && txt))
        dispatch(setCategory(txt))
    }

    return(
        <View>
            <FlatList
            style={container}
            data={dataCategory}
            renderItem ={i => <CategoryItem title={i.item} index={i.index} category={category} handleSetCategory={handleSetCategory} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i}
        />
        </View>
    )
}
export default Category
