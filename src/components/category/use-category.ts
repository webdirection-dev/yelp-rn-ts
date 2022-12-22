import {useAppDispatch, useAppSelector} from "../../store"
import {selectSearchInfo, setCategory, setSearch} from "../../features/search/search-slice"
import {stylesCategory} from "./style"
import {dataCategory} from "../../static/data/dataCategory"

export const useCategory = () => {
    const dispatch = useAppDispatch()
    const {search, category} = useAppSelector(store => selectSearchInfo(store))
    const {container} = stylesCategory

    const handleSetCategory = (txt: string) => {
        dispatch(setCategory(txt))
        dispatch(setSearch(txt))
    }

    return {dataCategory, container, category, handleSetCategory}
}
