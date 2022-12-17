import {FlatList, Text, View} from "react-native"
import {stylesCategory} from "./style"
import CategoryItem from "../categoryItem/CategoryItem"
import {dataCategory} from "../../static/data/dataCategory"

const Category = () => {
    const {container} = stylesCategory

    return(
        <View>
            <FlatList
            style={container}
            data={dataCategory}
            renderItem ={i => <CategoryItem title={i.item} index={i.index}/>}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => i}
        />
        </View>
    )
}
export default Category
