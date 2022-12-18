import {stylesCategoryItem} from "./style"
import {bgGeneral, colorActive} from "../../static/styles/var"

export const useCategoryItem = (title: string, index: number, category: string) => {
    const {container, imgContainer, img, titleS} = stylesCategoryItem

    return {
        imgContainer, img, titleS,
        imgUrl: getTitle(title),
        container: {
            ...container,
            marginLeft: index === 0 ? 25 : 5,
            backgroundColor: title === category ? colorActive : bgGeneral
        }
    }
}

//helper
function getTitle(title: string) {
    return(
        title === 'burger' ? require('../../static/img/burger.png') :
        title === 'cake' ? require('../../static/img/cake.png') :
        title === 'pasta' ? require('../../static/img/pasta.png') :
        title === 'pizza' ? require('../../static/img/pizza.png') :
        title === 'smoothie' ? require('../../static/img/smoothies.png') :
        title === 'steak' ? require('../../static/img/steak.png')
        : undefined
    )
}
