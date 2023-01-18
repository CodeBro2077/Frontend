import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategorySlice {
    isOpen: boolean
}
const initialState: CategorySlice = {
    isOpen: false
}


export const CategorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        toggleCategories: (state) => {
            state.isOpen = !state.isOpen;
        },

    }
})
export const { toggleCategories } = CategorySlice.actions
export default CategorySlice.reducer