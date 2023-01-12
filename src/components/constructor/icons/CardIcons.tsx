import React from "react";
import './CardIcons.scss'

import star from '../../../assets/star.svg'
import favourite from '../../../assets/favourite.svg'



function CardIcons() {

    let TytTozeReduxNadoPixnut = 32

    return (
        <div className="item-card__icons icons-card">
            <div className="icons-card__ratings">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span className="icons-card__quantity">{TytTozeReduxNadoPixnut}</span>
            </div>
            <img src={favourite} alt="" />
        </div>

    )




}

export default CardIcons;
