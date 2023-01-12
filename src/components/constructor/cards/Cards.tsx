import React from "react";
import './Cards.scss'

import CardIcons from "../icons/CardIcons";

import star from '../../../assets/star.svg'
import favourite from '../../../assets/favourite.svg'



function Cards() {

    let feeds = [
        {
            id: 0,
            title: '1Header of',
            description: '1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit expedita vero unde non. Amet excepturi, voluptatum ducimus itaque officiis similique sit necessitatibus, quos aliquam nemo, obcaecati nostrum magni nobis!',
            rating: 4,

        },
        {
            id: 1,
            title: '2Header of',
            description: '2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit expedita vero unde non. Amet excepturi, voluptatum ducimus itaque officiis similique sit necessitatibus, quos aliquam nemo, obcaecati nostrum magni nobis!',
            rating: 5,

        },
        {
            id: 2,
            title: '1Header of',
            description: '1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit expedita vero unde non. Amet excepturi, voluptatum ducimus itaque officiis similique sit necessitatibus, quos aliquam nemo, obcaecati nostrum magni nobis!',
            rating: 4,

        },
        {
            id: 3,
            title: '2Header of',
            description: '2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit expedita vero unde non. Amet excepturi, voluptatum ducimus itaque officiis similique sit necessitatibus, quos aliquam nemo, obcaecati nostrum magni nobis!',
            rating: 5,

        },
        {
            id: 4,
            title: '1Header of',
            description: '1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit expedita vero unde non. Amet excepturi, voluptatum ducimus itaque officiis similique sit necessitatibus, quos aliquam nemo, obcaecati nostrum magni nobis!',
            rating: 4,

        },
        {
            id: 5,
            title: '2Header of',
            description: '2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro fugit expedita vero unde non. Amet excepturi, voluptatum ducimus itaque officiis similique sit necessitatibus, quos aliquam nemo, obcaecati nostrum magni nobis!',
            rating: 5,

        },
    ]

    return (
        <div className={`Cards`}>

            {feeds.map((el) => (
                <div key={el.id} className="card__item item-card">
                    <h1 className="item-card__title">{el.title}</h1>
                    <p className="item-card__description">{el.description}</p>


                    <CardIcons />

                </div>
            )

            )}
        </div>
    );
}

export default Cards;
