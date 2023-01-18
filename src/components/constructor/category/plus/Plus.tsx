import React, { useState } from "react";
import './Plus.scss'
import { useDispatch, useSelector } from "react-redux";
import { CategorySlice, toggleCategories } from "../../../../features/store/reducers/CategorySlice";
import type { RootState } from "../../../../features/store/store";





function Plus() {
    const isOpen = useSelector((state: RootState) => state.isOpen.isOpen)
    console.log(isOpen);

    const dispatch = useDispatch()


    // @ts-ignore
    return (
        <div onClick={() => { dispatch(toggleCategories())}} className={`plus ${isOpen ? 'plus-open' : 'plus-close'}`}>
            <span>+</span>
        </div >
    );
}

export default Plus;
