import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <div className="container">
                <h2 className="login__title">Вход в личный кабинет</h2>
                <div className="login__form-block">
                    <input type="email" className="login__form-input" placeholder="Электронная почта"/>
                </div>
                <div className="login__form-block">
                    <input type="password" className="login__form-input" placeholder="Пароль"/>
                </div>

                <p className="login__purple">
                    Не помню пароль
                </p>

                <div className="login__btns">
                    <button className="login__from-btn">Войти в кабинет</button>
                    <button className="login__from-register">
                        <Link className="login__register-link" to={'/registration'}>
                            Регистрация
                        </Link>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Login;