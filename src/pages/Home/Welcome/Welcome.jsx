import React from 'react';
import welcomeImgOne from "../../../assets/home-img-1.png"
import welcomeImgTwo from "../../../assets/home-img-2.png"
import {Link} from "react-router-dom";
import jeans5 from "../../../assets/jeans5.jpg"

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome__row">
                    <div className="welcome__col">
                        <img src={welcomeImgOne} alt="" className="welcome__col-img1"/>
                        <h2 className="welcome__title">Добро пожаловать<br/>в <span className="welcome__span">Cocteil</span></h2>
                        <p className="welcome__subtitle">
                            Экономим Ваше время! <br/>
                            Предлагаем лучшие цены! <br/>
                            Доставляем в кратчайшие сроки!
                        </p>
                    </div>
                    <div className="welcome__col-2">
                        <div className="welcome__col-img-left">
                            <img src={welcomeImgTwo} alt="" className="welcome__col-img2"/>
                        </div>
                        {/*<div className="welcome__col-img-right">*/}
                        {/*    <img src={jeans5} alt="" className="welcome__col-img4"/>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="welcome__catalog">
                    <Link className="welcome-to-catalog" to={'/catalog'}>
                        Каталог
                        <div className="welcome__catalog-svg">
                            <svg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" fill="#514A7E"/>
                            </svg>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Welcome;