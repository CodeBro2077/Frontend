import React from "react";

import './SidebarVacancies.scss'

function SidebarVacancies() {

    let tytkakbireduxdolzen_BbITb = [
        {
            id: 0,
            job: 'Frontend developer',
            city: 'Москва',
            salary: 'от 10.000.000 USD до 100.000.000'
        },
        {
            id: 1,
            job: 'Backend developer',
            city: null,
            salary: '10.000.000 USD'
        },
        {
            id: 2,
            job: 'Python developer',
            city: 'Москва',
            salary: 'от 6.000.000 USD'
        },

    ]

    return (
        <div className="vacancies">
            <a href="/" className="vacancies__title">Вакансии</a>

            {tytkakbireduxdolzen_BbITb.map((element, id) => (
                <div key={element.id} className="vacancies__item item-vacancies">
                    <div className="item-vacancies__img"></div>

                    <div className="item-vacancies__information information-vacancies">
                        <a href="/" className="information-vacancies__title">{element.job}</a>
                        <span className="information-vacancies__city">{element.city}</span>
                        <span className="information-vacancies__salary">{element.salary}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SidebarVacancies;
