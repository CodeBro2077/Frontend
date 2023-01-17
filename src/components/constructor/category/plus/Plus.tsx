import React, {useState} from "react";
import './Plus.scss'
import {useDispatch, useSelector} from "react-redux";
import {categorySlice, closeCategories, openCategories} from "../../../../features/store/reducers/CategorySlice";
import {RootState} from "../../../../features/store/store";





function Plus() {
    const isOpen = useSelector((state:RootState) => state.isOpen)
    const dispatch = useDispatch()
    const changeOpen = () => {
        if (isOpen) {
            dispatch(closeCategories)
        }
        else {
            dispatch(openCategories)
        }
        console.log(isOpen)
    }
    // @ts-ignore
    return (
        <div onClick={changeOpen} className={`plus ${isOpen ? 'plus-open' : 'plus-close'}`}>
            <span>+</span>
        </div >
    );
}

export default Plus;
