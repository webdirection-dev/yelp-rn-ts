import {FlatList, View} from "react-native"
import CategoryItem from "../categoryItem/CategoryItem"
import {useCategory} from "./use-category"

const Category = () => {
    const {dataCategory, container, category, handleSetCategory} = useCategory()

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
