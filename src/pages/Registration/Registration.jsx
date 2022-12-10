import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask"
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {loginAccount} from "../../redux/reducers/user";


const Registration = () => {
    const [show, setShow] =useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})

    const onSubmit = (data) => {
        axios.post('/register', data)
            .then((resolve) => {
                dispatch(loginAccount({
                    ...resolve.data.user,
                    token: resolve.data.accessToken
                }))
                navigate('/')
                localStorage.setItem('user', JSON.stringify({
                    ...resolve.data.user,
                    token: resolve.data.accessToken
                }))
            }).catch((err) => alert(err))
    }

    return (
        <section className='login'>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="login__form">
                    <Link to={'/'} className="login__close">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7831 9.99994L15.3887 5.39438C15.4797 5.2881 15.5272 5.15139 15.5218 5.01157C15.5164 4.87175 15.4585 4.73912 15.3595 4.64018C15.2606 4.54124 15.128 4.48328 14.9881 4.47787C14.8483 4.47247 14.7116 4.52003 14.6053 4.61105L9.99977 9.2166L5.39421 4.60549C5.2896 4.50088 5.14771 4.44211 4.99977 4.44211C4.85182 4.44211 4.70994 4.50088 4.60532 4.60549C4.50071 4.71011 4.44194 4.85199 4.44194 4.99994C4.44194 5.14788 4.50071 5.28977 4.60532 5.39438L9.21643 9.99994L4.60532 14.6055C4.54717 14.6553 4.49993 14.7166 4.46659 14.7855C4.43324 14.8544 4.4145 14.9295 4.41155 15.006C4.40859 15.0825 4.42148 15.1588 4.44941 15.2301C4.47734 15.3014 4.51971 15.3662 4.57385 15.4203C4.62799 15.4744 4.69274 15.5168 4.76403 15.5447C4.83532 15.5727 4.91162 15.5856 4.98813 15.5826C5.06464 15.5796 5.13972 15.5609 5.20864 15.5276C5.27757 15.4942 5.33885 15.447 5.38866 15.3888L9.99977 10.7833L14.6053 15.3888C14.7116 15.4798 14.8483 15.5274 14.9881 15.522C15.128 15.5166 15.2606 15.4586 15.3595 15.3597C15.4585 15.2608 15.5164 15.1281 15.5218 14.9883C15.5272 14.8485 15.4797 14.7118 15.3887 14.6055L10.7831 9.99994Z" fill="#FFFDF5"/>
                        </svg>
                    </Link>
                    <h2 className="login__title">Регистрация</h2>
                    <div className="registration__row">
                        <div className="registration__col">
                            <div className="login__form-block">
                                <input
                                    {...register('login', {
                                        required: {
                                            value: true,
                                            message: 'ФИО обязательное'
                                        },
                                        pattern: {
                                            message: 'Заполните хотябы имя'
                                        }
                                    })}
                                    type="text" className="login__form-input" placeholder="ФИО"/>
                            </div>

                            <div className="login__form-block">
                                <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel'
                                           {...register('phone', {
                                    required: {
                                        value: true,
                                        message: 'Это поле обязательное'
                                    },
                                    pattern: {
                                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                        message: 'Заполните номер телефона'
                                    }
                                })} className={`login__form-input ${errors.phone ? 'lod=gin__form-input_error' : ''}`} placeholder='Номер телефона'/>
                                <p className='login__form-error'>
                                    {errors.phone && errors.phone?.message}
                                </p>
                            </div>

                            <div className="login__form-block">
                                <input
                                    {...register('password', {
                                        required: {
                                            message: "Пароль обязателен к заполнению",
                                            value: true
                                        },
                                        pattern: {
                                            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                                            message: 'Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                                        }
                                    })}
                                    type={show ? 'text' : 'password'} className="login__form-input" placeholder="Ввдите пароль"/>
                                <p className='register__form-error'>
                                    {errors.password && errors.password?.message}
                                </p>
                            </div>

                            <label className='register__form-label register__form-label_checkbox'>
                                <input checked={show} onChange={() => setShow(!show)} className='login__checkbox-box login__form-input_checkbox' type="checkbox"/>
                                <span className='login__checkbox-label'>Показать пароль</span>
                            </label>

                            <div className="login__checkbox">
                                <input className="login__checkbox-box" type="checkbox"/>
                                <label className="login__checkbox-label">Даю согласие на обработку персональных данных</label>
                            </div>

                            <div className="login__btns">
                                <button className="login__form-btn" type={"submit"}>Отправить
                                    <svg width="26" height="4" viewBox="0 0 26 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5"/>
                                    </svg>

                                </button>
                                <button className="login__form-register">
                                    <Link className="login__register-link" to={'/login'}>
                                        Войти в кабинет
                                    </Link>
                                </button>
                            </div>

                        </div>
                        <div className="registration__col">
                            <div className="registration__block">

                                <div className="login__form-block">
                                    <input
                                        {...register('location', {
                                            required: {
                                                message: 'Адрес обязательно к заполнению',
                                                value: true
                                            },
                                            // minLength: {
                                            //     message: 'Минимум 10 символа',
                                            //     value: 10
                                            // },
                                        })}
                                        type="text" className="login__form-input" placeholder="Ваш полный адрес"/>
                                </div>

                                <div className="login__form-block">
                                    <input
                                        {...register('email',{
                                            required: {
                                                message: 'Email обязательно к заполнению',
                                                value: true
                                            },
                                            minLength: {
                                                message: 'Минимум 10 символа',
                                                value: 10
                                            },
                                            pattern: {
                                                message: 'Напишите правильно свой email',
                                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                            }

                                        })}
                                        type="email" className="login__form-input" placeholder="Введите email"/>
                                    <p className='register__form-error'>
                                        {errors.email && errors.email?.message}
                                    </p>
                                </div>

                                <div className="login__form-block">
                                    <input
                                        {...register('comment', {
                                            required: {
                                                message: 'Оставьте комментарий',
                                                value: true
                                            },
                                            minLength: {
                                                message: 'Минимум 10 символа',
                                                value: 10
                                            }
                                        })}
                                        type="text" className="login__form-input" placeholder="Комментарий"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Registration;