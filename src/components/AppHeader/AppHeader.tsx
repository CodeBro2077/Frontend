
import { Route, Routes, Link, Outlet } from "react-router-dom";
import AppMain from "../AppMain/AppMain";
import AppTests from "../AppTests/AppTests";
import AppError from "../AppError/AppError";

// @ts-ignore
import User from '../../assets/user.svg'
// @ts-ignore
import Sun from '../../assets/sun.svg'
// @ts-ignore
import Search from "../../assets/search.svg"

import './AppHeader.scss'
import {useState} from "react";

const AppHeader = () => {


    // Открытие меню бургер 
    const [isOpenMobile, setIsOpenMobile] = useState(false)
    const openingMenuBurger = () => {
        setIsOpenMobile(!isOpenMobile)
    }
    //______________________


    return (
        <>

            <nav className="nav">
                <div className="nav__container">

                    <span className="nav__logo">
                        <Link to="/">CODEBRO</Link>
                    </span>

                    <ul className="nav__menu menu-nav">
                        <li className="menu-nav__item">
                            <Link to="news">Лента</Link>
                        </li>
                        <li className="menu-nav__item">
                            <Link to="tests">Тесты</Link>
                        </li>
                        <li className="menu-nav__item">
                            <Link to="courses">Курсы</Link>
                        </li>
                        <li className="menu-nav__item">
                            <Link to="vacancies">Вакансии</Link>
                        </li>
                        <li className="menu-nav__item">
                            <Link to="events">Мероприятия</Link>
                        </li>
                    </ul>

                    <div className="nav__buttons buttons-nav">
                        <button className="buttons-nav__create">Create blog</button>
                        <img src={User} alt="" className="buttons-nav__user" />
                        <img src={Search} alt="" className="buttons-nav__search" />
                        <img src={Sun} alt="" className="buttons-nav__sun" />

                        <nav className="burger__menu menu-burger">
                            <div onClick={openingMenuBurger} className="menu-burger__burger">
                                <span className="menu-burger__span"></span>
                            </div>
                            <ul className={`menu-burger__list ${isOpenMobile ? 'open' : ''}`}>
                                <input placeholder="Поиск" className="menu-burger__input" type="text" />
                                <li className="menu-burger__item">
                                    <Link to="news">Лента</Link>
                                </li>
                                <li className="menu-burger__item">
                                    <Link to="tests">Тесты</Link>
                                </li>
                                <li className="menu-burger__item">
                                    <Link to="courses">Курсы</Link>
                                </li>
                                <li className="menu-burger__item">
                                    <Link to="vacancies">Вакансии</Link>
                                </li>
                                <li className="menu-burger__item">
                                    <Link to="events">Мероприятия</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </nav>

            <Outlet />

        </>

    );
};

export default AppHeader;
