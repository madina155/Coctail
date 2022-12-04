import React from 'react';
import blouse from "../../assets/blouse01.png"

const Favorites = () => {
    return (
        <section className="favorites">
            <div className="container">
                <h2 className="favorites__title">Избранное</h2>
                <div className="favorites__box">
                    <div className="favorites__right">
                        <ul className="favorites__ul">
                            <li className="favorites__item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8893 6.66666V5.02777C13.8893 4.51708 13.7887 4.01138 13.5933 3.53956C13.3979 3.06774 13.1114 2.63903 12.7503 2.27791C12.3892 1.9168 11.9605 1.63034 11.4886 1.43491C11.0168 1.23947 10.5111 1.13889 10.0004 1.13889C9.48974 1.13889 8.98404 1.23947 8.51222 1.43491C8.0404 1.63034 7.61169 1.9168 7.25057 2.27791C6.88946 2.63903 6.603 3.06774 6.40757 3.53956C6.21213 4.01138 6.11154 4.51708 6.11154 5.02777V8.91666C6.11154 9.064 6.17008 9.20531 6.27426 9.3095C6.37845 9.41369 6.51976 9.47222 6.6671 9.47222C6.81444 9.47222 6.95575 9.41369 7.05994 9.3095C7.16412 9.20531 7.22266 9.064 7.22266 8.91666V7.77777H11.6671V6.66666H7.22266V5.02777C7.22266 4.29106 7.51531 3.58452 8.03625 3.06359C8.55718 2.54265 9.26372 2.25 10.0004 2.25C10.7371 2.25 11.4437 2.54265 11.9646 3.06359C12.4856 3.58452 12.7782 4.29106 12.7782 5.02777V8.88889C12.7782 9.03623 12.8367 9.17754 12.9409 9.28172C13.0451 9.38591 13.1864 9.44444 13.3338 9.44444C13.4811 9.44444 13.6224 9.38591 13.7266 9.28172C13.8308 9.17754 13.8893 9.03623 13.8893 8.88889V7.77777H16.6671V17.7778H3.33377V7.77777H5.00043V6.66666H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66666H13.8893Z" fill="#7D7D7D"/>
                                </svg>
                                <p className="favorites__cart">Корзина</p>
                                <p className="favorites__cart-see">2</p>
                            </li>
                            <div className="favorites__line"></div>
                            <li className="favorites__item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0007 18.0167C9.87799 18.0163 9.75882 17.9753 9.66185 17.9C6.57296 15.5 4.44519 13.4333 2.9563 11.3944C1.0563 8.78889 0.622962 6.38334 1.66741 4.24445C2.41185 2.71667 4.55074 1.46667 7.05074 2.19445C8.24271 2.53875 9.28268 3.27711 10.0007 4.28889C10.7188 3.27711 11.7588 2.53875 12.9507 2.19445C15.4452 1.47778 17.5896 2.71667 18.3341 4.24445C19.3785 6.38334 18.9452 8.78889 17.0452 11.3944C15.5563 13.4333 13.4285 15.5 10.3396 17.9C10.2427 17.9753 10.1235 18.0163 10.0007 18.0167ZM5.62852 3.1C5.03366 3.07685 4.44373 3.21614 3.92204 3.50292C3.40036 3.7897 2.96663 4.21314 2.66741 4.72778C1.8063 6.49445 2.19518 8.46111 3.8563 10.7333C5.62161 13.0103 7.68875 15.0363 10.0007 16.7556C12.3124 15.038 14.3795 13.0139 16.1452 10.7389C17.8119 8.46112 18.1952 6.49445 17.3341 4.73334C16.7785 3.62223 15.1119 2.73889 13.2563 3.26112C12.6613 3.43695 12.1097 3.7354 11.6371 4.13727C11.1644 4.53913 10.7811 5.03551 10.5119 5.59445C10.47 5.69634 10.3988 5.7835 10.3073 5.84483C10.2158 5.90616 10.1081 5.93891 9.99796 5.93891C9.88781 5.93891 9.78014 5.90616 9.68864 5.84483C9.59713 5.7835 9.52593 5.69634 9.48407 5.59445C9.21684 5.03411 8.8342 4.53658 8.36124 4.13446C7.88827 3.73234 7.33566 3.43473 6.73963 3.26112C6.37851 3.15623 6.00456 3.10201 5.62852 3.1Z" fill="#7D7D7D"/>
                                </svg>

                                <p className="favorites__cart">Избранное</p>
                                <p className="favorites__like-see"></p>
                            </li>
                            <li className="favorites__item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6773 9.73887C16.8051 6.27776 13.5217 4.18332 9.88841 4.18332C6.25508 4.18332 2.96619 6.27776 1.11063 9.73887L0.955078 9.99999L1.09952 10.2667C2.97174 13.7278 6.25508 15.8222 9.88841 15.8222C13.5217 15.8222 16.8106 13.7555 18.6773 10.2667L18.8217 9.99999L18.6773 9.73887ZM9.88841 14.6833C6.76063 14.6833 3.88841 12.9389 2.22174 9.99999C3.88841 7.0611 6.76063 5.31665 9.88841 5.31665C13.0162 5.31665 15.8551 7.06665 17.5495 9.99999C15.8551 12.9389 13.0106 14.6833 9.88841 14.6833Z" fill="#7D7D7D"/>
                                    <path d="M10.0509 6.20556C9.29761 6.21106 8.56286 6.43966 7.93944 6.86249C7.31602 7.28533 6.83189 7.88343 6.54819 8.58125C6.26449 9.27907 6.19395 10.0453 6.34548 10.7832C6.49701 11.5211 6.86382 12.1975 7.39956 12.7271C7.93531 13.2566 8.61597 13.6155 9.35557 13.7585C10.0952 13.9014 10.8605 13.8219 11.555 13.5301C12.2495 13.2383 12.8419 12.7472 13.2575 12.1189C13.673 11.4906 13.893 10.7533 13.8898 10C13.8876 9.49858 13.7865 9.00252 13.5922 8.54024C13.398 8.07796 13.1144 7.65856 12.7578 7.30606C12.4012 6.95357 11.9785 6.67492 11.514 6.48607C11.0495 6.29723 10.5523 6.2019 10.0509 6.20556ZM10.0509 12.7167C9.5188 12.7112 9.0002 12.5486 8.56022 12.2493C8.12024 11.9501 7.77849 11.5275 7.5779 11.0346C7.37731 10.5418 7.32682 10.0007 7.43277 9.4792C7.53872 8.95775 7.79639 8.47922 8.17342 8.10373C8.55044 7.72825 9.03001 7.47253 9.55189 7.36871C10.0738 7.26489 10.6147 7.31758 11.1067 7.52018C11.5988 7.72278 12.02 8.06625 12.3174 8.50745C12.6149 8.94865 12.7753 9.46791 12.7787 10C12.7801 10.3581 12.7105 10.713 12.5738 11.044C12.4371 11.375 12.2361 11.6755 11.9823 11.9282C11.7286 12.1809 11.4272 12.3808 11.0957 12.5161C10.7641 12.6514 10.409 12.7196 10.0509 12.7167Z" fill="#7D7D7D"/>
                                </svg>

                                <p className="favorites__cart">Просмотренные</p>
                                <p className="favorites__like-see">12</p>
                            </li>
                            <div className="favorites__line"></div>
                            <li className="favorites__item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7214 2.26666C12.6491 2.26666 10.5547 3 10.5547 4.39444V5.27777C10.9268 5.29492 11.2977 5.33201 11.6658 5.38889V4.39444C11.6658 4.03333 12.8269 3.37222 14.7214 3.37222C16.6158 3.37222 17.7769 4.03888 17.7769 4.39444V10.1333C17.7769 10.4333 16.9658 10.9333 15.6102 11.0944V12.2056C17.3491 12.0278 18.888 11.3167 18.888 10.1222V4.39444C18.888 3 16.7936 2.26666 14.7214 2.26666Z" fill="#7D7D7D"/>
                                    <path d="M2.22244 10.1333V4.39444C2.22244 4.03333 3.38355 3.37222 5.278 3.37222C7.17244 3.37222 8.33355 4.03889 8.33355 4.39444V5.38889C8.70167 5.33201 9.07257 5.29492 9.44466 5.27777V4.39444C9.44466 2.99444 7.35022 2.26111 5.278 2.26111C3.20577 2.26111 1.11133 3 1.11133 4.39444V10.1333C1.11133 11.3333 2.65022 12.0389 4.38911 12.2222V11.1111C3.03355 10.9333 2.22244 10.4333 2.22244 10.1333Z" fill="#7D7D7D"/>
                                    <path d="M10.0009 6.0278C7.26198 6.0278 5.19531 7.07225 5.19531 8.46113V15.3C5.19531 16.6889 7.26198 17.7334 10.0009 17.7334C12.7398 17.7334 14.8064 16.6889 14.8064 15.3V8.46113C14.8064 7.07225 12.7398 6.0278 10.0009 6.0278ZM13.6953 10.2889C13.2231 10.8445 11.7953 11.4 10.0009 11.4C9.25028 11.4078 8.5023 11.3106 7.77865 11.1111V11.9222C8.50577 12.1006 9.25219 12.1883 10.0009 12.1834C11.2882 12.2356 12.5655 11.9359 13.6953 11.3167V13.05C13.2231 13.6056 11.7953 14.1611 10.0009 14.1611C9.25002 14.1671 8.50203 14.068 7.77865 13.8667V14.6778C8.50577 14.8562 9.25219 14.9439 10.0009 14.9389C11.2882 14.9911 12.5655 14.6915 13.6953 14.0722V15.3445C13.6953 15.8722 12.2231 16.6667 10.0009 16.6667C7.77865 16.6667 6.30642 15.8722 6.30642 15.3445V8.46113C6.30642 7.93336 7.77865 7.13891 10.0009 7.13891C12.2231 7.13891 13.6953 7.93336 13.6953 8.46113V10.2889Z" fill="#7D7D7D"/>
                                </svg>

                                <p className="favorites__cart">Бонусы</p>
                                <p className="favorites__like-see"></p>
                            </li>
                            <li className="favorites__item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0002 9.44444C10.7694 9.44444 11.5212 9.21636 12.1608 8.78904C12.8003 8.36172 13.2987 7.75436 13.5931 7.04376C13.8874 6.33316 13.9644 5.55123 13.8144 4.79686C13.6643 4.04249 13.2939 3.34956 12.7501 2.80569C12.2062 2.26182 11.5133 1.89144 10.7589 1.74138C10.0045 1.59133 9.22261 1.66834 8.512 1.96268C7.8014 2.25702 7.19404 2.75547 6.76672 3.395C6.33941 4.03452 6.11133 4.7864 6.11133 5.55555C6.11133 6.58694 6.52105 7.5761 7.25036 8.30541C7.97967 9.03472 8.96882 9.44444 10.0002 9.44444ZM10.0002 2.77777C10.5496 2.77777 11.0867 2.94068 11.5435 3.24591C12.0003 3.55114 12.3563 3.98497 12.5665 4.49254C12.7768 5.00011 12.8318 5.55863 12.7246 6.09746C12.6174 6.6363 12.3529 7.13125 11.9644 7.51973C11.5759 7.90821 11.081 8.17277 10.5421 8.27995C10.0033 8.38713 9.44478 8.33212 8.93721 8.12188C8.42963 7.91164 7.99581 7.5556 7.69058 7.0988C7.38535 6.64199 7.22244 6.10494 7.22244 5.55555C7.22244 4.81883 7.5151 4.1123 8.03603 3.59136C8.55697 3.07043 9.2635 2.77777 10.0002 2.77777Z" fill="#7D7D7D"/>
                                    <path d="M16.9273 13.5389C16.0364 12.5972 14.9628 11.8472 13.7721 11.3346C12.5814 10.8219 11.2987 10.5576 10.0023 10.5576C8.70601 10.5576 7.42328 10.8219 6.2326 11.3346C5.04192 11.8472 3.96829 12.5972 3.07735 13.5389C2.88419 13.7452 2.77691 14.0174 2.77735 14.3V17.2222C2.77735 17.5169 2.89441 17.7995 3.10278 18.0079C3.31116 18.2163 3.59377 18.3333 3.88846 18.3333H16.1107C16.4054 18.3333 16.688 18.2163 16.8964 18.0079C17.1047 17.7995 17.2218 17.5169 17.2218 17.2222V14.3C17.2237 14.0181 17.1185 13.7461 16.9273 13.5389ZM16.1107 17.2222H3.88846V14.2944C4.6758 13.4654 5.62362 12.8052 6.67421 12.354C7.7248 11.9029 8.85621 11.6703 9.99957 11.6703C11.1429 11.6703 12.2743 11.9029 13.3249 12.354C14.3755 12.8052 15.3233 13.4654 16.1107 14.2944V17.2222Z" fill="#7D7D7D"/>
                                </svg>

                                <p className="favorites__cart">Личные данные</p>
                                <p className="favorites__like-see"></p>
                            </li>
                            <li className="favorites__item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1619 2.22223H4.35079C4.07572 2.22951 3.81464 2.34505 3.62427 2.54374C3.4339 2.74243 3.32964 3.00821 3.33412 3.28334V16.7167C3.32964 16.9918 3.4339 17.2576 3.62427 17.4563C3.81464 17.655 4.07572 17.7705 4.35079 17.7778H15.6508C15.9259 17.7705 16.1869 17.655 16.3773 17.4563C16.5677 17.2576 16.6719 16.9918 16.6675 16.7167V6.62223L12.1619 2.22223ZM11.9952 3.60556L15.3286 6.88334H11.9952V3.60556ZM4.44523 16.6667V3.33334H11.1119V7.77778H15.5563V16.6667H4.44523Z" fill="#7D7D7D"/>
                                </svg>

                                <p className="favorites__cart">История покупок</p>
                                <p className="favorites__like-see"></p>
                            </li>
                            <div className="favorites__line"></div>
                            <li className="favorites__item">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.44531 2.22223H13.3342C13.6289 2.22223 13.9115 2.33929 14.1199 2.54767C14.3282 2.75604 14.4453 3.03866 14.4453 3.33334H4.44531V16.6667H13.3342V11.2222H14.4453V16.6667C14.4453 16.9614 14.3282 17.244 14.1199 17.4523C13.9115 17.6607 13.6289 17.7778 13.3342 17.7778H4.44531C4.15063 17.7778 3.86801 17.6607 3.65964 17.4523C3.45127 17.244 3.3342 16.9614 3.3342 16.6667V3.33334C3.3342 3.03866 3.45127 2.75604 3.65964 2.54767C3.86801 2.33929 4.15063 2.22223 4.44531 2.22223Z" fill="#7D7D7D"/>
                                    <path d="M11.6007 10.2555C11.6588 10.3053 11.706 10.3666 11.7394 10.4356C11.7727 10.5045 11.7915 10.5796 11.7944 10.6561C11.7974 10.7326 11.7845 10.8089 11.7566 10.8802C11.7286 10.9515 11.6863 11.0162 11.6321 11.0703C11.578 11.1245 11.5132 11.1669 11.4419 11.1948C11.3707 11.2227 11.2944 11.2356 11.2178 11.2327C11.1413 11.2297 11.0663 11.211 10.9973 11.1776C10.9284 11.1443 10.8671 11.097 10.8173 11.0389L7.60065 7.82221L10.8118 4.60554C10.918 4.51453 11.0547 4.46697 11.1946 4.47237C11.3344 4.47777 11.467 4.53573 11.566 4.63467C11.6649 4.73361 11.7229 4.86625 11.7283 5.00607C11.7337 5.14589 11.6861 5.2826 11.5951 5.38887L9.72287 7.22221H17.7784C17.9258 7.22221 18.0671 7.28074 18.1713 7.38493C18.2755 7.48911 18.334 7.63042 18.334 7.77776C18.334 7.92511 18.2755 8.06641 18.1713 8.1706C18.0671 8.27479 17.9258 8.33332 17.7784 8.33332H9.72287L11.6007 10.2555Z" fill="#7D7D7D"/>
                                </svg>

                                <p className="favorites__cart">Выйти</p>
                            </li>


                        </ul>
                    </div>
                    <div className="favorites__left">
                        <div className="favorites__row">
                            <div className="favorites__col">
                                <div className="favorites__top">
                                    <img src={blouse} alt="" className="favorites__img"/>
                                </div>
                                <div className="favorites__btm">
                                    <p className="favorites__price">50.00p</p>
                                    <div className="favorites__btm-right ">
                                        <p className="favorites__text">Блузка женская классная</p>
                                        <div className="favorites__icons">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.077 18.8889H4.9214C4.70761 18.8838 4.49692 18.8367 4.30136 18.7502C4.10579 18.6637 3.92919 18.5395 3.78163 18.3848C3.63408 18.23 3.51847 18.0477 3.44141 17.8482C3.36434 17.6487 3.32734 17.436 3.33251 17.2222V6.23889H4.44362V17.2222C4.43831 17.2901 4.44648 17.3584 4.46766 17.4231C4.48883 17.4878 4.52258 17.5477 4.56699 17.5993C4.61139 17.651 4.66556 17.6933 4.72638 17.7239C4.7872 17.7546 4.85348 17.7729 4.9214 17.7778H15.077C15.1449 17.7729 15.2111 17.7546 15.272 17.7239C15.3328 17.6933 15.387 17.651 15.4314 17.5993C15.4758 17.5477 15.5095 17.4878 15.5307 17.4231C15.5519 17.3584 15.56 17.2901 15.5547 17.2222V6.23889H16.6658V17.2222C16.671 17.436 16.634 17.6487 16.5569 17.8482C16.4799 18.0477 16.3643 18.23 16.2167 18.3848C16.0692 18.5395 15.8926 18.6637 15.697 18.7502C15.5014 18.8367 15.2907 18.8838 15.077 18.8889Z" fill="#121212"/>
                                                <path d="M17.1004 5H2.77821C2.63087 5 2.48956 4.94147 2.38537 4.83728C2.28119 4.73309 2.22266 4.59178 2.22266 4.44444C2.22266 4.2971 2.28119 4.15579 2.38537 4.0516C2.48956 3.94742 2.63087 3.88889 2.77821 3.88889H17.1004C17.2478 3.88889 17.3891 3.94742 17.4933 4.0516C17.5975 4.15579 17.656 4.2971 17.656 4.44444C17.656 4.59178 17.5975 4.73309 17.4933 4.83728C17.3891 4.94147 17.2478 5 17.1004 5Z" fill="#121212"/>
                                                <path d="M11.666 7.22223H12.7771V15.5556H11.666V7.22223Z" fill="#121212"/>
                                                <path d="M7.22266 7.22223H8.33377V15.5556H7.22266V7.22223Z" fill="#121212"/>
                                                <path d="M12.7782 3.25556H11.7227V2.22223H8.27821V3.25556H7.22266V2.22223C7.2223 1.93692 7.33171 1.66241 7.52821 1.45556C7.72472 1.24871 7.99326 1.12538 8.27821 1.11111H11.7227C12.0076 1.12538 12.2762 1.24871 12.4727 1.45556C12.6692 1.66241 12.7786 1.93692 12.7782 2.22223V3.25556Z" fill="#121212"/>
                                            </svg>

                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.3125 5.66666V4.02777C12.3125 3.51708 12.2111 3.01138 12.0139 2.53956C11.8168 2.06774 11.5279 1.63903 11.1636 1.27791C10.7994 0.916798 10.367 0.630344 9.89107 0.434909C9.41516 0.239474 8.9051 0.138885 8.38998 0.138885C7.87487 0.138885 7.3648 0.239474 6.88889 0.434909C6.41299 0.630344 5.98057 0.916798 5.61633 1.27791C5.25209 1.63903 4.96316 2.06774 4.76604 2.53956C4.56891 3.01138 4.46745 3.51708 4.46745 4.02777V7.91666C4.46745 8.064 4.52649 8.20531 4.63158 8.3095C4.73667 8.41369 4.8792 8.47222 5.02781 8.47222C5.17643 8.47222 5.31896 8.41369 5.42405 8.3095C5.52914 8.20531 5.58817 8.064 5.58817 7.91666V6.77777H10.0711V5.66666H5.58817V4.02777C5.58817 3.29106 5.88336 2.58452 6.4088 2.06359C6.93425 1.54265 7.6469 1.25 8.38998 1.25C9.13307 1.25 9.84572 1.54265 10.3712 2.06359C10.8966 2.58452 11.1918 3.29106 11.1918 4.02777V7.88889C11.1918 8.03623 11.2508 8.17754 11.3559 8.28172C11.461 8.38591 11.6035 8.44444 11.7521 8.44444C11.9008 8.44444 12.0433 8.38591 12.1484 8.28172C12.2535 8.17754 12.3125 8.03623 12.3125 7.88889V6.77777H15.1143V16.7778H1.66564V6.77777H3.34673V5.66666H0.544922V16.8278C0.544922 17.1092 0.657684 17.3791 0.858403 17.5781C1.05912 17.7771 1.33135 17.8889 1.61521 17.8889H15.1648C15.4486 17.8889 15.7208 17.7771 15.9216 17.5781C16.1223 17.3791 16.235 17.1092 16.235 16.8278V5.66666H12.3125Z" fill="#121212"/>
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="favorites__btm-left">
                                        <button className="favorites__btn">Подробнее
                                            <svg width="27" height="4" viewBox="0 0 27 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M26.3442 2.17678C26.4418 2.07915 26.4418 1.92085 26.3442 1.82322L24.7532 0.232233C24.6556 0.134602 24.4973 0.134602 24.3997 0.232233C24.302 0.329864 24.302 0.488155 24.3997 0.585786L25.8139 2L24.3997 3.41421C24.302 3.51184 24.302 3.67014 24.3997 3.76777C24.4973 3.8654 24.6556 3.8654 24.7532 3.76777L26.3442 2.17678ZM0.951172 2.25H26.1674V1.75H0.951172V2.25Z" fill="#514A7E"/>
                                            </svg>
                                        </button>

                                        <svg className="favorites__btn-svg" width="70" height="10" viewBox="0 0 70 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_150_890)">
                                                <path d="M69.4437 4.66106C69.547 4.58415 69.6236 4.47686 69.6628 4.35423C69.7019 4.2316 69.7018 4.09978 69.6622 3.97725C69.6227 3.85473 69.5459 3.74765 69.4424 3.67101C69.339 3.59438 69.2141 3.55205 69.0854 3.54995L66.5854 3.4555C66.5731 3.45465 66.5613 3.45027 66.5515 3.44288C66.5416 3.43548 66.5341 3.4254 66.5299 3.41383L65.666 1.0805C65.6226 0.96179 65.5437 0.859284 65.4401 0.786861C65.3365 0.714439 65.2132 0.675598 65.0868 0.675598C64.9604 0.675598 64.8371 0.714439 64.7335 0.786861C64.6299 0.859284 64.551 0.96179 64.5076 1.0805L63.6465 3.42217C63.6423 3.43373 63.6348 3.44382 63.6249 3.45121C63.615 3.4586 63.6033 3.46299 63.591 3.46384L61.091 3.55828C60.9623 3.56038 60.8374 3.60272 60.734 3.67935C60.6305 3.75598 60.5537 3.86306 60.5141 3.98559C60.4746 4.10811 60.4744 4.23993 60.5136 4.36256C60.5528 4.48519 60.6294 4.59248 60.7326 4.66939L62.6937 6.21106C62.7036 6.21878 62.7109 6.22921 62.7148 6.24106C62.7188 6.25291 62.7192 6.26566 62.716 6.27772L62.041 8.66939C62.006 8.79118 62.0094 8.92079 62.0507 9.04058C62.092 9.16038 62.1692 9.26455 62.2718 9.33891C62.3744 9.41328 62.4974 9.45424 62.6241 9.45621C62.7508 9.45818 62.875 9.42108 62.9799 9.34995L65.0521 7.96106C65.0623 7.95401 65.0744 7.95023 65.0868 7.95023C65.0992 7.95023 65.1113 7.95401 65.1215 7.96106L67.1937 9.34995C67.2972 9.42351 67.421 9.46304 67.5479 9.46304C67.6749 9.46304 67.7986 9.42351 67.9021 9.34995C68.0047 9.27628 68.082 9.17262 68.1233 9.05324C68.1645 8.93385 68.1678 8.8046 68.1326 8.68328L67.4521 6.28328C67.4485 6.27123 67.4487 6.25836 67.4527 6.24643C67.4566 6.2345 67.4642 6.22409 67.4743 6.21661L69.4437 4.66106Z" fill="#514A7E"/>
                                            </g>
                                            <g clip-path="url(#clip1_150_890)">
                                                <path d="M39.4437 4.66106C39.547 4.58415 39.6236 4.47686 39.6628 4.35423C39.7019 4.2316 39.7018 4.09978 39.6622 3.97725C39.6227 3.85473 39.5459 3.74765 39.4424 3.67101C39.339 3.59438 39.2141 3.55205 39.0854 3.54995L36.5854 3.4555C36.5731 3.45465 36.5613 3.45027 36.5515 3.44288C36.5416 3.43548 36.5341 3.4254 36.5299 3.41383L35.666 1.0805C35.6226 0.96179 35.5437 0.859284 35.4401 0.786861C35.3365 0.714439 35.2132 0.675598 35.0868 0.675598C34.9604 0.675598 34.8371 0.714439 34.7335 0.786861C34.6299 0.859284 34.551 0.96179 34.5076 1.0805L33.6465 3.42217C33.6423 3.43373 33.6348 3.44382 33.6249 3.45121C33.615 3.4586 33.6033 3.46299 33.591 3.46384L31.091 3.55828C30.9623 3.56038 30.8374 3.60272 30.734 3.67935C30.6305 3.75598 30.5537 3.86306 30.5141 3.98559C30.4746 4.10811 30.4744 4.23993 30.5136 4.36256C30.5528 4.48519 30.6294 4.59248 30.7326 4.66939L32.6937 6.21106C32.7036 6.21878 32.7109 6.22921 32.7148 6.24106C32.7188 6.25291 32.7192 6.26566 32.716 6.27772L32.041 8.66939C32.006 8.79118 32.0094 8.92079 32.0507 9.04058C32.092 9.16038 32.1692 9.26455 32.2718 9.33891C32.3744 9.41328 32.4974 9.45424 32.6241 9.45621C32.7508 9.45818 32.875 9.42108 32.9799 9.34995L35.0521 7.96106C35.0623 7.95401 35.0744 7.95023 35.0868 7.95023C35.0992 7.95023 35.1113 7.95401 35.1215 7.96106L37.1937 9.34995C37.2972 9.42351 37.421 9.46304 37.5479 9.46304C37.6749 9.46304 37.7986 9.42351 37.9021 9.34995C38.0047 9.27628 38.082 9.17262 38.1233 9.05324C38.1645 8.93385 38.1678 8.8046 38.1326 8.68328L37.4521 6.28328C37.4485 6.27123 37.4487 6.25836 37.4527 6.24643C37.4566 6.2345 37.4642 6.22409 37.4743 6.21661L39.4437 4.66106Z" fill="#514A7E"/>
                                            </g>
                                            <g clip-path="url(#clip2_150_890)">
                                                <path d="M54.4437 4.66106C54.547 4.58415 54.6236 4.47686 54.6628 4.35423C54.7019 4.2316 54.7018 4.09978 54.6622 3.97725C54.6227 3.85473 54.5459 3.74765 54.4424 3.67101C54.339 3.59438 54.2141 3.55205 54.0854 3.54995L51.5854 3.4555C51.5731 3.45465 51.5613 3.45027 51.5515 3.44288C51.5416 3.43548 51.5341 3.4254 51.5299 3.41383L50.666 1.0805C50.6226 0.96179 50.5437 0.859284 50.4401 0.786861C50.3365 0.714439 50.2132 0.675598 50.0868 0.675598C49.9604 0.675598 49.8371 0.714439 49.7335 0.786861C49.6299 0.859284 49.551 0.96179 49.5076 1.0805L48.6465 3.42217C48.6423 3.43373 48.6348 3.44382 48.6249 3.45121C48.615 3.4586 48.6033 3.46299 48.591 3.46384L46.091 3.55828C45.9623 3.56038 45.8374 3.60272 45.734 3.67935C45.6305 3.75598 45.5537 3.86306 45.5141 3.98559C45.4746 4.10811 45.4744 4.23993 45.5136 4.36256C45.5528 4.48519 45.6294 4.59248 45.7326 4.66939L47.6937 6.21106C47.7036 6.21878 47.7109 6.22921 47.7148 6.24106C47.7188 6.25291 47.7192 6.26566 47.716 6.27772L47.041 8.66939C47.006 8.79118 47.0094 8.92079 47.0507 9.04058C47.092 9.16038 47.1692 9.26455 47.2718 9.33891C47.3744 9.41328 47.4974 9.45424 47.6241 9.45621C47.7508 9.45818 47.875 9.42108 47.9799 9.34995L50.0521 7.96106C50.0623 7.95401 50.0744 7.95023 50.0868 7.95023C50.0992 7.95023 50.1113 7.95401 50.1215 7.96106L52.1937 9.34995C52.2972 9.42351 52.421 9.46304 52.5479 9.46304C52.6749 9.46304 52.7986 9.42351 52.9021 9.34995C53.0047 9.27628 53.082 9.17262 53.1233 9.05324C53.1645 8.93385 53.1678 8.8046 53.1326 8.68328L52.4521 6.28328C52.4485 6.27123 52.4487 6.25836 52.4527 6.24643C52.4566 6.2345 52.4642 6.22409 52.4743 6.21661L54.4437 4.66106Z" fill="#514A7E"/>
                                            </g>
                                            <g clip-path="url(#clip3_150_890)">
                                                <path d="M24.4437 4.66106C24.547 4.58415 24.6236 4.47686 24.6628 4.35423C24.7019 4.2316 24.7018 4.09978 24.6622 3.97725C24.6227 3.85473 24.5459 3.74765 24.4424 3.67101C24.339 3.59438 24.2141 3.55205 24.0854 3.54995L21.5854 3.4555C21.5731 3.45465 21.5613 3.45027 21.5515 3.44288C21.5416 3.43548 21.5341 3.4254 21.5299 3.41383L20.666 1.0805C20.6226 0.96179 20.5437 0.859284 20.4401 0.786861C20.3365 0.714439 20.2132 0.675598 20.0868 0.675598C19.9604 0.675598 19.8371 0.714439 19.7335 0.786861C19.6299 0.859284 19.551 0.96179 19.5076 1.0805L18.6465 3.42217C18.6423 3.43373 18.6348 3.44382 18.6249 3.45121C18.615 3.4586 18.6033 3.46299 18.591 3.46384L16.091 3.55828C15.9623 3.56038 15.8374 3.60272 15.734 3.67935C15.6305 3.75598 15.5537 3.86306 15.5141 3.98559C15.4746 4.10811 15.4744 4.23993 15.5136 4.36256C15.5528 4.48519 15.6294 4.59248 15.7326 4.66939L17.6937 6.21106C17.7036 6.21878 17.7109 6.22921 17.7148 6.24106C17.7188 6.25291 17.7192 6.26566 17.716 6.27772L17.041 8.66939C17.006 8.79118 17.0094 8.92079 17.0507 9.04058C17.092 9.16038 17.1692 9.26455 17.2718 9.33891C17.3744 9.41328 17.4974 9.45424 17.6241 9.45621C17.7508 9.45818 17.875 9.42108 17.9799 9.34995L20.0521 7.96106C20.0623 7.95401 20.0744 7.95023 20.0868 7.95023C20.0992 7.95023 20.1113 7.95401 20.1215 7.96106L22.1937 9.34995C22.2972 9.42351 22.421 9.46304 22.5479 9.46304C22.6749 9.46304 22.7986 9.42351 22.9021 9.34995C23.0047 9.27628 23.082 9.17262 23.1233 9.05324C23.1645 8.93385 23.1678 8.8046 23.1326 8.68328L22.4521 6.28328C22.4485 6.27123 22.4487 6.25836 22.4527 6.24643C22.4566 6.2345 22.4642 6.22409 22.4743 6.21661L24.4437 4.66106Z" fill="#514A7E"/>
                                            </g>
                                            <g clip-path="url(#clip4_150_890)">
                                                <path d="M9.44375 4.66106C9.54699 4.58415 9.62357 4.47686 9.66275 4.35423C9.70194 4.2316 9.70176 4.09978 9.66225 3.97725C9.62273 3.85473 9.54586 3.74765 9.44242 3.67101C9.33897 3.59438 9.21414 3.55205 9.08542 3.54995L6.58542 3.4555C6.57312 3.45465 6.56134 3.45027 6.55148 3.44288C6.54163 3.43548 6.53412 3.4254 6.52986 3.41383L5.66597 1.0805C5.62257 0.96179 5.54373 0.859284 5.44014 0.786861C5.33655 0.714439 5.2132 0.675598 5.08681 0.675598C4.96041 0.675598 4.83706 0.714439 4.73347 0.786861C4.62988 0.859284 4.55104 0.96179 4.50764 1.0805L3.64653 3.42217C3.64227 3.43373 3.63476 3.44382 3.6249 3.45121C3.61505 3.4586 3.60326 3.46299 3.59097 3.46384L1.09097 3.55828C0.962251 3.56038 0.837416 3.60272 0.73397 3.67935C0.630524 3.75598 0.553655 3.86306 0.514141 3.98559C0.474627 4.10811 0.47445 4.23993 0.513634 4.36256C0.552818 4.48519 0.629399 4.59248 0.732638 4.66939L2.69375 6.21106C2.70356 6.21878 2.7109 6.22921 2.71485 6.24106C2.7188 6.25291 2.71919 6.26566 2.71597 6.27772L2.04097 8.66939C2.00599 8.79118 2.00938 8.92079 2.05068 9.04058C2.09197 9.16038 2.16917 9.26455 2.27176 9.33891C2.37436 9.41328 2.49737 9.45424 2.62407 9.45621C2.75077 9.45818 2.875 9.42108 2.97986 9.34995L5.05208 7.96106C5.06229 7.95401 5.0744 7.95023 5.08681 7.95023C5.09921 7.95023 5.11132 7.95401 5.12153 7.96106L7.19375 9.34995C7.29719 9.42351 7.42098 9.46304 7.54792 9.46304C7.67485 9.46304 7.79864 9.42351 7.90208 9.34995C8.0047 9.27628 8.08197 9.17262 8.12326 9.05324C8.16455 8.93385 8.16783 8.8046 8.13264 8.68328L7.45208 6.28328C7.44848 6.27123 7.44868 6.25836 7.45265 6.24643C7.45663 6.2345 7.46419 6.22409 7.47431 6.21661L9.44375 4.66106Z" fill="#514A7E"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_150_890">
                                                    <rect width="10" height="10" fill="white" transform="translate(60)"/>
                                                </clipPath>
                                                <clipPath id="clip1_150_890">
                                                    <rect width="10" height="10" fill="white" transform="translate(30)"/>
                                                </clipPath>
                                                <clipPath id="clip2_150_890">
                                                    <rect width="10" height="10" fill="white" transform="translate(45)"/>
                                                </clipPath>
                                                <clipPath id="clip3_150_890">
                                                    <rect width="10" height="10" fill="white" transform="translate(15)"/>
                                                </clipPath>
                                                <clipPath id="clip4_150_890">
                                                    <rect width="10" height="10" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Favorites;