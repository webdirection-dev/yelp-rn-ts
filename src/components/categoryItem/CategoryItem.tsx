import {FC} from "react"
import {Image, Text, View, TouchableOpacity} from "react-native"
import {useCategoryItem} from "./use-category-item"

interface IPropCategoryItem {
    title: string;
    index: number;
    category: string;
    handleSetCategory: (txt: string) => void
}

const CategoryItem: FC<IPropCategoryItem> = ({title, index, category, handleSetCategory}) => {
    const {container, imgContainer, img, titleS, imgUrl} = useCategoryItem(title, index, category)

    return(
        <TouchableOpacity onPress={() => handleSetCategory(title)} activeOpacity={1}>
            <View style={container}>
                <View style={imgContainer}>
                    <Image style={img} source={imgUrl} />
                </View>
                <Text style={titleS}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default CategoryItem
