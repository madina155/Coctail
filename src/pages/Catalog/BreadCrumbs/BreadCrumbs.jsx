import React, {useContext} from 'react';
import {CustomContext} from "../../../utils/context";
import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";
// import {Link} from "react-router-dom";
// import Home from "../../Home/Home";

const BreadCrumbs = ({data}) => {

    const {gender} = useContext(CustomContext)

    return (
        <ul className="breadCrumbs">
            <li className="breadCrumbs__item">Главная/</li>
            {/*<li className="breadCrumbs__item">*/}
            {/*    {data.gender === 'woman' && 'Женшинам'}*/}
            {/*    {gender === 'men' && 'Мужчинам'}*/}
            {/*    {gender === 'child' && 'Детям'}*/}
            {/*    {gender === 'shoes' && 'Обувь'}*/}
            {/*    {gender === 'toy' && 'Игрушки'}*/}
            {/*    {gender === 'men' && 'Аксессуары'}*/}
            {/*/!*<li className="breadCrumbs__item">/Женшинам/</li>*!/*/}

            {/*/!*<li className="breadCrumbs__item">Блузки и рубашки</li>*!/*/}

            {/*</li>*/}
            <li className="breadCrumbs__item">
                <CategoryTitle/>
            </li>
        </ul>
    );
};

export default BreadCrumbs;