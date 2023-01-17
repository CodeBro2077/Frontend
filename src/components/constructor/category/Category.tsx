import './category.scss'

import Plus from "./plus/Plus";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";







function Category() {
    //- Инициализирующий массив всех категорий
    let initializationArray:string[] = ['JavaScript', 'Python', 'Web', 'Обучение', 'Data science', 'C++', 'Java', 'DevOps', 'Frontend', 'Backend', 'Kotlin', 'Ruby', 'Scala', 'Git', 'Rust', 'UX/UI', '1C', 'AR/VR', 'GameDev', 'Go', 'IOS', 'Android', 'PHP']

    //- Это массив всех элементов категории
    const [Categories, setCategories] = useState(initializationArray)

    //- Это массив всех ВЫБРАННЫХ элементов категории
    const [selectCategories, setSelectCategories] = useState([])

    const [allSelected, setAllSelected] = useState(false)


    //-- При клике на НЕВЫБРАННУЮ категорию, срабатывает эта функция
    const clickCategory = (id:number) => {
        Categories.filter((elem, index) => {

            if (id === index) {

                // Добавляем кликнутый элемент в массив выбранных категорий 
                // @ts-ignore
                setSelectCategories((prev) => [...prev, elem])
                // -- Это чтобы красиво было и элемент попадал вначало списка
                // Удаляем кликнутый элемет из всех элемертов категорий
                setCategories(Categories.filter((element) => element !== elem))

            }

        })

    }

    //-- При клике на ВЫБРАННУЮ категорию, срабатывает эта функция
    const clickSelectCategory = (id:number) => {


        selectCategories.filter((elem, index) => {
            if (id === index) {
                //  Удаляем из массива выбранных элементов , элемент
                setSelectCategories(selectCategories.filter((element, index) => index !== id))
                // Добавляем элемент в массив всех категорий
                Categories.unshift(elem)
            }
        })

    }


    // Вызываем при клике на кнопку 'Все'
    useEffect(() => {

        // ну тут все ясно понятно
        if (allSelected) {

            // @ts-ignore
            setSelectCategories(initializationArray)
            setCategories([])

        } else {

            setSelectCategories([])
            setCategories(initializationArray)

        }
    }, [allSelected])

    // Вызываем при клике на кнопку 'Все' и меняем булево состояние
    const changeAllSelection = () => {
        setAllSelected(!allSelected)
    }






    return (
        <div className="category">


            {/* Тут выводим выбранные категории */}
            <div className="category__items items-category">

                <div onClick={changeAllSelection} className={`items-category__item ${allSelected ? 'blue' : ''}`}>
                    <span>Все</span>
                </div>

                {selectCategories.map((elem, id:number) => {
                    return (
                        <div onClick={() => clickSelectCategory(id)} key={id} className={`items-category__item blue`}>
                            <span>{elem}</span>
                        </div>
                    )

                })}

                {/* Выводим остальные категории */}
                {Categories.map((elem, id) => {

                    return (
                        <div onClick={() => clickCategory(id)} key={id} className={`items-category__item`}>
                            <span>{elem}</span>
                        </div>
                    )

                })}
            </div>

            {/* Это плюсик */}
            <Plus />
        </div>
    );
}

export default Category;
