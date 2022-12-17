import {stylesCategoryItem} from "./style"
import {bgGeneral, colorActive} from "../../static/styles/var"

export const useCategoryItem = (title: string, index: number) => {
    const {container, imgContainer, img, titleS} = stylesCategoryItem

    const imgUrl =
        title === 'burger' ? require('../../static/img/burger.png') :
        title === 'cake' ? require('../../static/img/cake.png') :
        title === 'pasta' ? require('../../static/img/pasta.png') :
        title === 'pizza' ? require('../../static/img/pizza.png') :
        title === 'smoothies' ? require('../../static/img/smoothies.png') :
        title === 'steak' ? require('../../static/img/steak.png')
        : undefined

    return {
        imgContainer, img, titleS, imgUrl,
        container: {
            ...container,
            marginLeft: index === 0 ? 25 : 20,
            backgroundColor: colorActive
        }
    }
}
