import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../../store'

const searchSlice = createSlice({
    name: '@@search',
    initialState: {search: '', category: ''},
    reducers: {
        clearSearch: (state) => {
            state.search = ''
            state.category = ''
        },

        setSearch: (state, action) => {
            state.search = action.payload
        },

        setCategory: (state, action) => {
            state.category = action.payload
        },
    }
})
export const {clearSearch, setSearch, setCategory} = searchSlice.actions
export const searchReducer = searchSlice.reducer
//selectors
export const selectSearchInfo = (state: RootState) => ({
    search: state.searchReducer.search,
    category: state.searchReducer.category,
})
