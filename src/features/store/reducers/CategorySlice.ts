import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CategorySlice {
    isOpen: boolean
}
const initialState: CategorySlice = {
    isOpen: false
}


export const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        openCategories: (state) => {
            state.isOpen = true
        },
        closeCategories: (state) => {
            state.isOpen = false
        }
    }
})
export const {openCategories, closeCategories} = categorySlice.actions
export default categorySlice.reducer