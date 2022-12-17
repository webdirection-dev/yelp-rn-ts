import {FC} from "react"
import {Image, Text, View} from "react-native"
import {useCategoryItem} from "./use-category-item"

interface IPropCategoryItem {title: string, index: number}

const CategoryItem: FC<IPropCategoryItem> = ({title, index}) => {
    const {container, imgContainer, img, titleS, imgUrl} = useCategoryItem(title, index)

    return(
        <View style={container}>
            <View style={imgContainer}>
                <Image style={img} source={imgUrl} />
            </View>
            <Text style={titleS}>{title}</Text>
        </View>
    )
}
export default CategoryItem
