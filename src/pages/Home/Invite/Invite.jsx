import React from 'react';
import InputMask from "react-input-mask";

const Invite = () => {
    return (
        <section className="invite">
            <div className="invite__row">
                <div className="invite__col-big">
                    <div className="invite__box">
                        <h3 className="invite__title">
                            Приглашаем  к сотрудничеству производителей и поставщиков <br/>
                            одежды, обуви и аксессуаров</h3>

                        <label>
                            <div className="login__form-block">
                                <input type="text" className="login__form-input" placeholder="ФИО"/>
                            </div>
                            <div className="login__form-block">
                                <InputMask mask={`+\\9\\96(999)99-99-99`} type='tel' className='login__form-input' placeholder='Номер телефона'/>
                                {/*<p className='login__form-error'>*/}
                                {/*    {errors.phone && errors.phone?.message}*/}
                                {/*</p>*/}
                            </div>
                            <div className="login__form-block">
                                <input type="email" className="login__form-input" placeholder="Введите email"/>
                                {/*<p className='register__form-error'>*/}
                                {/*    {errors.email && errors.email?.message}*/}
                                {/*</p>*/}
                            </div>
                            <div className="login__checkbox">
                                <input className="login__checkbox-box" type="checkbox"/>
                                <label className="login__checkbox-label">Даю согласие на обработку персональных данных</label>
                            </div>
                        </label>

                        <button className="login__form-btn" type={"submit"}>Отправить
                            <svg width="26" height="4" viewBox="0 0 26 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#FFFDF5"/>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>

            <div className="invite__circle-border">
                <svg width="183" height="381" viewBox="0 0 183 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_211_96" fill="white">
                        <path d="M190.044 0.0218347C165.093 0.0189673 140.385 4.93062 117.332 14.4764C94.2792 24.0221 73.3321 38.015 55.687 55.6561C38.0418 73.2972 24.0441 94.241 14.4931 117.292C4.94203 140.343 0.0247009 165.049 0.0218347 190C0.0189684 214.951 4.93063 239.659 14.4764 262.712C24.0221 285.764 38.015 306.712 55.6561 324.357C73.2972 342.002 94.2411 356 117.292 365.551C140.343 375.102 165.049 380.019 190 380.022L190.022 190.022L190.044 0.0218347Z"/>
                    </mask>
                    <path d="M190.044 0.0218347C165.093 0.0189673 140.385 4.93062 117.332 14.4764C94.2792 24.0221 73.3321 38.015 55.687 55.6561C38.0418 73.2972 24.0441 94.241 14.4931 117.292C4.94203 140.343 0.0247009 165.049 0.0218347 190C0.0189684 214.951 4.93063 239.659 14.4764 262.712C24.0221 285.764 38.015 306.712 55.6561 324.357C73.2972 342.002 94.2411 356 117.292 365.551C140.343 375.102 165.049 380.019 190 380.022L190.022 190.022L190.044 0.0218347Z" stroke="#514A7E" stroke-width="2" mask="url(#path-1-inside-1_211_96)"/>
                </svg>
            </div>

            <div className="invite__circle-back">
                <svg width="100" height="201" viewBox="0 0 100 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_211_97" fill="white">
                        <path d="M100.023 0.0114919C86.8908 0.00998279 73.8869 2.59507 61.7538 7.61914C49.6206 12.6432 38.5959 20.0079 29.3089 29.2927C20.022 38.5775 12.6548 49.6006 7.62793 61.7325C2.60107 73.8645 0.0130005 86.8678 0.0114919 100C0.00998336 113.132 2.59507 126.136 7.61914 138.269C12.6432 150.402 20.0079 161.427 29.2927 170.714C38.5775 180.001 49.6006 187.368 61.7325 192.395C73.8645 197.422 86.8678 200.01 100 200.011L100.011 100.011L100.023 0.0114919Z"/>
                    </mask>
                    <path d="M100.023 0.0114919C86.8908 0.00998279 73.8869 2.59507 61.7538 7.61914C49.6206 12.6432 38.5959 20.0079 29.3089 29.2927C20.022 38.5775 12.6548 49.6006 7.62793 61.7325C2.60107 73.8645 0.0130005 86.8678 0.0114919 100C0.00998336 113.132 2.59507 126.136 7.61914 138.269C12.6432 150.402 20.0079 161.427 29.2927 170.714C38.5775 180.001 49.6006 187.368 61.7325 192.395C73.8645 197.422 86.8678 200.01 100 200.011L100.011 100.011L100.023 0.0114919Z" fill="#514A7E" stroke="#514A7E" stroke-width="2" mask="url(#path-1-inside-1_211_97)"/>
                </svg>

            </div>

        </section>
    );
};

export default Invite;