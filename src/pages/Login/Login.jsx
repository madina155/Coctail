import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="login">
            <div className="container">
                <Link to={'/'} className="login__close">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7831 9.99993L15.3887 5.39438C15.4797 5.2881 15.5272 5.15139 15.5218 5.01157C15.5164 4.87175 15.4585 4.73912 15.3595 4.64017C15.2606 4.54123 15.128 4.48327 14.9881 4.47787C14.8483 4.47247 14.7116 4.52003 14.6053 4.61104L9.99977 9.2166L5.39421 4.60549C5.2896 4.50087 5.14771 4.4421 4.99977 4.4421C4.85182 4.4421 4.70994 4.50087 4.60532 4.60549C4.50071 4.7101 4.44194 4.85199 4.44194 4.99993C4.44194 5.14788 4.50071 5.28976 4.60532 5.39438L9.21643 9.99993L4.60532 14.6055C4.54717 14.6553 4.49993 14.7166 4.46659 14.7855C4.43324 14.8544 4.4145 14.9295 4.41155 15.006C4.40859 15.0825 4.42148 15.1588 4.44941 15.2301C4.47734 15.3014 4.51971 15.3661 4.57385 15.4203C4.62799 15.4744 4.69274 15.5168 4.76403 15.5447C4.83532 15.5727 4.91162 15.5856 4.98813 15.5826C5.06464 15.5796 5.13972 15.5609 5.20864 15.5276C5.27757 15.4942 5.33885 15.447 5.38866 15.3888L9.99977 10.7833L14.6053 15.3888C14.7116 15.4798 14.8483 15.5274 14.9881 15.522C15.128 15.5166 15.2606 15.4586 15.3595 15.3597C15.4585 15.2607 15.5164 15.1281 15.5218 14.9883C15.5272 14.8485 15.4797 14.7118 15.3887 14.6055L10.7831 9.99993Z" fill="#FFFDF5"/>
                    </svg>
                </Link>
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
                    <button className="login__form-btn">Войти в кабинет</button>
                    <button className="login__form-register">
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