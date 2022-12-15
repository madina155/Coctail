import React from 'react';
import HeaderRight from "../../components/HeaderRight/HeaderRight";
import {Link} from "react-router-dom";
import RightUl from "../../components/RightUl/RightUl";

const Bonus = () => {
    return (
        <section className="bonus">
            <div className="container">
                <div className="bonus__top">
                    <div className="cart__back">
                        <Link to={'/favorites'} className='cart__back-link' href="">
                            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="#FFFDF5"/>
                            </svg>
                        </Link>
                    </div>

                    <HeaderRight/>
                </div>

                <h2 className="bonus__title">Бонусы</h2>
                <div className="bonus__row">
                    <div className="bonus__col">
                        <RightUl/>
                    </div>
                    <div className="bonus__col">
                        <p className="bonus__title">0.00</p>
                        <p className="bonus__num-title">Бонусных баллов</p>
                    </div>
                    <div className="bonus__col">
                        <p className="bonus__title">3%</p>
                        <p className="bonus__num-title">Бонусов от суммы покупок</p>
                    </div>
                    <div className="bonus__col">
                        <p className="bonus__title">325, 00 р.</p>
                        <p className="bonus__num-title">Сумма покупок</p>
                    </div>
                    <div className="bonus__col">
                        <Link className="bonus__link" to={'/catalog'}>
                            Как получить больше?
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bonus;