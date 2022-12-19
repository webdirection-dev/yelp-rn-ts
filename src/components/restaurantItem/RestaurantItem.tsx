import {FC} from "react"
import {Image, Text, View} from "react-native"
import {stylesRestaurantItem} from "./style"
import {IRestaurantItem} from "../../static/types/types"

interface IPropsRestaurantItem {item: IRestaurantItem}

const RestaurantItem: FC<IPropsRestaurantItem> = ({item}) => {
    const {container, img, title, infoContainer, info, rating, money} = stylesRestaurantItem

    return(
        <View style={container}>
            <Image style={img} source={{uri: item.image_url}} />

            <View style={infoContainer}>
                <Text style={title}>{item.name}</Text>
                <View style={info}>
                    <Text style={rating}>{item.rating}</Text>
                    <Text style={money}>{item.price}</Text>
                </View>
            </View>
        </View>
    )
}
export default RestaurantItem
