import React from 'react';
import {Link} from "react-router-dom";

const HeaderRight = () => {
    return (
        <div className="header__right">
            <label className="header__search" htmlFor="">
                <a href="" className="header__search-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.07184 2.80558C10.2752 2.80448 11.4519 3.16032 12.4531 3.8281C13.4542 4.49588 14.2348 5.44558 14.6961 6.55707C15.1573 7.66855 15.2786 8.89188 15.0445 10.0723C14.8104 11.2527 14.2315 12.3372 13.3809 13.1885C12.5304 14.0398 11.4464 14.6198 10.2662 14.8549C9.08603 15.0901 7.86259 14.97 6.75068 14.5097C5.63878 14.0494 4.68836 13.2697 4.01967 12.2692C3.35098 11.2687 2.99406 10.0923 2.99406 8.88891C3.00135 7.27872 3.64385 5.73647 4.78192 4.59736C5.91999 3.45825 7.46165 2.81434 9.07184 2.80558V2.80558ZM9.07184 1.66669C7.64341 1.66669 6.24707 2.09026 5.05938 2.88385C3.87169 3.67744 2.946 4.8054 2.39937 6.12508C1.85274 7.44477 1.70971 8.89692 1.98839 10.2979C2.26706 11.6989 2.95491 12.9857 3.96495 13.9958C4.975 15.0058 6.26188 15.6937 7.66285 15.9724C9.06382 16.251 10.516 16.108 11.8357 15.5614C13.1553 15.0147 14.2833 14.089 15.0769 12.9014C15.8705 11.7137 16.2941 10.3173 16.2941 8.88891C16.2941 6.97346 15.5331 5.13646 14.1787 3.78203C12.8243 2.4276 10.9873 1.66669 9.07184 1.66669Z" fill="#121212"/>
                        <path d="M19.4449 18.4945L15.3504 14.3723L14.5615 15.1556L18.656 19.2778C18.7074 19.3296 18.7685 19.3708 18.8359 19.3989C18.9032 19.4271 18.9754 19.4417 19.0484 19.442C19.1214 19.4423 19.1938 19.4281 19.2613 19.4004C19.3289 19.3727 19.3903 19.332 19.4421 19.2806C19.4939 19.2291 19.535 19.168 19.5632 19.1007C19.5914 19.0333 19.606 18.9611 19.6063 18.8881C19.6065 18.8151 19.5924 18.7428 19.5647 18.6752C19.537 18.6077 19.4963 18.5463 19.4449 18.4945Z" fill="#121212"/>
                    </svg>
                </a>
                <input placeholder="Поиск" type="text" className="header__search-field"/>
            </label>

            <div className="header__icons">
                <div className="header__icons-link-admin">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0002 9.44447C10.7694 9.44447 11.5212 9.21639 12.1608 8.78907C12.8003 8.36175 13.2987 7.75439 13.5931 7.04379C13.8874 6.33319 13.9644 5.55126 13.8144 4.79689C13.6643 4.04252 13.2939 3.34959 12.7501 2.80572C12.2062 2.26185 11.5133 1.89147 10.7589 1.74141C10.0045 1.59136 9.22261 1.66837 8.512 1.96271C7.8014 2.25705 7.19404 2.7555 6.76672 3.39503C6.33941 4.03455 6.11133 4.78643 6.11133 5.55558C6.11133 6.58698 6.52105 7.57613 7.25036 8.30544C7.97967 9.03475 8.96882 9.44447 10.0002 9.44447ZM10.0002 2.7778C10.5496 2.7778 11.0867 2.94071 11.5435 3.24594C12.0003 3.55117 12.3563 3.985 12.5665 4.49257C12.7768 5.00014 12.8318 5.55866 12.7246 6.0975C12.6174 6.63633 12.3529 7.13128 11.9644 7.51976C11.5759 7.90824 11.081 8.1728 10.5421 8.27998C10.0033 8.38716 9.44478 8.33215 8.93721 8.12191C8.42963 7.91167 7.99581 7.55563 7.69058 7.09883C7.38535 6.64202 7.22244 6.10497 7.22244 5.55558C7.22244 4.81887 7.5151 4.11233 8.03603 3.59139C8.55697 3.07046 9.2635 2.7778 10.0002 2.7778Z" fill="#121212"/>
                        <path d="M16.9273 13.5389C16.0364 12.5972 14.9628 11.8472 13.7721 11.3346C12.5814 10.8219 11.2987 10.5576 10.0023 10.5576C8.70601 10.5576 7.42328 10.8219 6.2326 11.3346C5.04192 11.8472 3.96829 12.5972 3.07735 13.5389C2.88419 13.7452 2.77691 14.0174 2.77735 14.3V17.2222C2.77735 17.5169 2.89441 17.7995 3.10278 18.0079C3.31116 18.2163 3.59377 18.3333 3.88846 18.3333H16.1107C16.4054 18.3333 16.688 18.2163 16.8964 18.0079C17.1047 17.7995 17.2218 17.5169 17.2218 17.2222V14.3C17.2237 14.0181 17.1185 13.7461 16.9273 13.5389ZM16.1107 17.2222H3.88846V14.2944C4.6758 13.4654 5.62362 12.8052 6.67421 12.354C7.7248 11.9029 8.85621 11.6703 9.99957 11.6703C11.1429 11.6703 12.2743 11.9029 13.3249 12.354C14.3755 12.8052 15.3233 13.4654 16.1107 14.2944V17.2222Z" fill="#121212"/>
                    </svg>
                </div>
                <Link to={'/favorites'} className="header__icons-link">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99977 18.0167C9.87702 18.0163 9.75785 17.9753 9.66088 17.9C6.57199 15.5 4.44421 13.4333 2.95532 11.3944C1.05532 8.78889 0.621986 6.38334 1.66643 4.24445C2.41087 2.71667 4.54976 1.46667 7.04976 2.19445C8.24173 2.53875 9.2817 3.27711 9.99977 4.28889C10.7178 3.27711 11.7578 2.53875 12.9498 2.19445C15.4442 1.47778 17.5887 2.71667 18.3331 4.24445C19.3775 6.38334 18.9442 8.78889 17.0442 11.3944C15.5553 13.4333 13.4275 15.5 10.3387 17.9C10.2417 17.9753 10.1225 18.0163 9.99977 18.0167ZM5.62754 3.1C5.03268 3.07685 4.44275 3.21614 3.92107 3.50292C3.39938 3.7897 2.96565 4.21314 2.66643 4.72778C1.80532 6.49445 2.19421 8.46111 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7556C12.3114 15.038 14.3785 13.0139 16.1442 10.7389C17.8109 8.46112 18.1942 6.49445 17.3331 4.73334C16.7775 3.62223 15.1109 2.73889 13.2553 3.26112C12.6603 3.43695 12.1088 3.7354 11.6361 4.13727C11.1634 4.53913 10.7801 5.03551 10.5109 5.59445C10.469 5.69634 10.3978 5.7835 10.3063 5.84483C10.2148 5.90616 10.1071 5.93891 9.99699 5.93891C9.88683 5.93891 9.77916 5.90616 9.68766 5.84483C9.59616 5.7835 9.52495 5.69634 9.4831 5.59445C9.21586 5.03411 8.83322 4.53658 8.36026 4.13446C7.88729 3.73234 7.33468 3.43473 6.73865 3.26112C6.37753 3.15623 6.00359 3.10201 5.62754 3.1Z" fill="#121212"/>
                    </svg>
                </Link>
                <Link to={'/cart'} className='header__menu-link'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8893 6.66669V5.0278C13.8893 4.51711 13.7887 4.01141 13.5933 3.53959C13.3979 3.06777 13.1114 2.63906 12.7503 2.27795C12.3892 1.91683 11.9605 1.63037 11.4886 1.43494C11.0168 1.2395 10.5111 1.13892 10.0004 1.13892C9.48974 1.13892 8.98404 1.2395 8.51222 1.43494C8.0404 1.63037 7.61169 1.91683 7.25057 2.27795C6.88946 2.63906 6.603 3.06777 6.40757 3.53959C6.21213 4.01141 6.11154 4.51711 6.11154 5.0278V8.91669C6.11154 9.06404 6.17008 9.20534 6.27426 9.30953C6.37845 9.41372 6.51976 9.47225 6.6671 9.47225C6.81444 9.47225 6.95575 9.41372 7.05994 9.30953C7.16412 9.20534 7.22266 9.06404 7.22266 8.91669V7.7778H11.6671V6.66669H7.22266V5.0278C7.22266 4.29109 7.51531 3.58455 8.03625 3.06362C8.55718 2.54269 9.26372 2.25003 10.0004 2.25003C10.7371 2.25003 11.4437 2.54269 11.9646 3.06362C12.4856 3.58455 12.7782 4.29109 12.7782 5.0278V8.88892C12.7782 9.03626 12.8367 9.17757 12.9409 9.28175C13.0451 9.38594 13.1864 9.44447 13.3338 9.44447C13.4811 9.44447 13.6224 9.38594 13.7266 9.28175C13.8308 9.17757 13.8893 9.03626 13.8893 8.88892V7.7778H16.6671V17.7778H3.33377V7.7778H5.00043V6.66669H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66669H13.8893Z" fill="#121212"/>
                    </svg>
                </Link>
            </div>

            <div className="header__show">
                <div className="header__show-top">
                    <div className="header__show-img">
                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19.5" cy="19.5" r="19.5" fill="#C4C4C4"/>
                        </svg>

                    </div>
                    <button className="header__show-btn">
                        <Link className="header__show-btn-text" to={'login'}>Войти</Link>
                    </button>
                </div>
                <div className="header__show-bottom">
                    <ul className="favorites__ul">
                        <li className="favorites__item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8893 6.66666V5.02777C13.8893 4.51708 13.7887 4.01138 13.5933 3.53956C13.3979 3.06774 13.1114 2.63903 12.7503 2.27791C12.3892 1.9168 11.9605 1.63034 11.4886 1.43491C11.0168 1.23947 10.5111 1.13889 10.0004 1.13889C9.48974 1.13889 8.98404 1.23947 8.51222 1.43491C8.0404 1.63034 7.61169 1.9168 7.25057 2.27791C6.88946 2.63903 6.603 3.06774 6.40757 3.53956C6.21213 4.01138 6.11154 4.51708 6.11154 5.02777V8.91666C6.11154 9.064 6.17008 9.20531 6.27426 9.3095C6.37845 9.41369 6.51976 9.47222 6.6671 9.47222C6.81444 9.47222 6.95575 9.41369 7.05994 9.3095C7.16412 9.20531 7.22266 9.064 7.22266 8.91666V7.77777H11.6671V6.66666H7.22266V5.02777C7.22266 4.29106 7.51531 3.58452 8.03625 3.06359C8.55718 2.54265 9.26372 2.25 10.0004 2.25C10.7371 2.25 11.4437 2.54265 11.9646 3.06359C12.4856 3.58452 12.7782 4.29106 12.7782 5.02777V8.88889C12.7782 9.03623 12.8367 9.17754 12.9409 9.28172C13.0451 9.38591 13.1864 9.44444 13.3338 9.44444C13.4811 9.44444 13.6224 9.38591 13.7266 9.28172C13.8308 9.17754 13.8893 9.03623 13.8893 8.88889V7.77777H16.6671V17.7778H3.33377V7.77777H5.00043V6.66666H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66666H13.8893Z" fill="#7D7D7D"/>
                            </svg>
                            <p className="favorites__cart">Корзина</p>
                            {/*<p className="favorites__cart-see">2</p>*/}
                        </li>
                        <li className="favorites__item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0007 18.0167C9.87799 18.0163 9.75882 17.9753 9.66185 17.9C6.57296 15.5 4.44519 13.4333 2.9563 11.3944C1.0563 8.78889 0.622962 6.38334 1.66741 4.24445C2.41185 2.71667 4.55074 1.46667 7.05074 2.19445C8.24271 2.53875 9.28268 3.27711 10.0007 4.28889C10.7188 3.27711 11.7588 2.53875 12.9507 2.19445C15.4452 1.47778 17.5896 2.71667 18.3341 4.24445C19.3785 6.38334 18.9452 8.78889 17.0452 11.3944C15.5563 13.4333 13.4285 15.5 10.3396 17.9C10.2427 17.9753 10.1235 18.0163 10.0007 18.0167ZM5.62852 3.1C5.03366 3.07685 4.44373 3.21614 3.92204 3.50292C3.40036 3.7897 2.96663 4.21314 2.66741 4.72778C1.8063 6.49445 2.19518 8.46111 3.8563 10.7333C5.62161 13.0103 7.68875 15.0363 10.0007 16.7556C12.3124 15.038 14.3795 13.0139 16.1452 10.7389C17.8119 8.46112 18.1952 6.49445 17.3341 4.73334C16.7785 3.62223 15.1119 2.73889 13.2563 3.26112C12.6613 3.43695 12.1097 3.7354 11.6371 4.13727C11.1644 4.53913 10.7811 5.03551 10.5119 5.59445C10.47 5.69634 10.3988 5.7835 10.3073 5.84483C10.2158 5.90616 10.1081 5.93891 9.99796 5.93891C9.88781 5.93891 9.78014 5.90616 9.68864 5.84483C9.59713 5.7835 9.52593 5.69634 9.48407 5.59445C9.21684 5.03411 8.8342 4.53658 8.36124 4.13446C7.88827 3.73234 7.33566 3.43473 6.73963 3.26112C6.37851 3.15623 6.00456 3.10201 5.62852 3.1Z" fill="#7D7D7D"/>
                            </svg>
                            <p className="favorites__cart">Избранное</p>
                            <p className="favorites__like-see">4</p>
                        </li>
                        <li className="favorites__item">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6773 9.73887C16.8051 6.27776 13.5217 4.18332 9.88841 4.18332C6.25508 4.18332 2.96619 6.27776 1.11063 9.73887L0.955078 9.99999L1.09952 10.2667C2.97174 13.7278 6.25508 15.8222 9.88841 15.8222C13.5217 15.8222 16.8106 13.7555 18.6773 10.2667L18.8217 9.99999L18.6773 9.73887ZM9.88841 14.6833C6.76063 14.6833 3.88841 12.9389 2.22174 9.99999C3.88841 7.0611 6.76063 5.31665 9.88841 5.31665C13.0162 5.31665 15.8551 7.06665 17.5495 9.99999C15.8551 12.9389 13.0106 14.6833 9.88841 14.6833Z" fill="#7D7D7D"/>
                                <path d="M10.0509 6.20556C9.29761 6.21106 8.56286 6.43966 7.93944 6.86249C7.31602 7.28533 6.83189 7.88343 6.54819 8.58125C6.26449 9.27907 6.19395 10.0453 6.34548 10.7832C6.49701 11.5211 6.86382 12.1975 7.39956 12.7271C7.93531 13.2566 8.61597 13.6155 9.35557 13.7585C10.0952 13.9014 10.8605 13.8219 11.555 13.5301C12.2495 13.2383 12.8419 12.7472 13.2575 12.1189C13.673 11.4906 13.893 10.7533 13.8898 10C13.8876 9.49858 13.7865 9.00252 13.5922 8.54024C13.398 8.07796 13.1144 7.65856 12.7578 7.30606C12.4012 6.95357 11.9785 6.67492 11.514 6.48607C11.0495 6.29723 10.5523 6.2019 10.0509 6.20556ZM10.0509 12.7167C9.5188 12.7112 9.0002 12.5486 8.56022 12.2493C8.12024 11.9501 7.77849 11.5275 7.5779 11.0346C7.37731 10.5418 7.32682 10.0007 7.43277 9.4792C7.53872 8.95775 7.79639 8.47922 8.17342 8.10373C8.55044 7.72825 9.03001 7.47253 9.55189 7.36871C10.0738 7.26489 10.6147 7.31758 11.1067 7.52018C11.5988 7.72278 12.02 8.06625 12.3174 8.50745C12.6149 8.94865 12.7753 9.46791 12.7787 10C12.7801 10.3581 12.7105 10.713 12.5738 11.044C12.4371 11.375 12.2361 11.6755 11.9823 11.9282C11.7286 12.1809 11.4272 12.3808 11.0957 12.5161C10.7641 12.6514 10.409 12.7196 10.0509 12.7167Z" fill="#7D7D7D"/>
                            </svg>

                            <p className="favorites__cart">Просмотренные</p>
                            {/*<p className="favorites__like-see">12</p>*/}
                        </li>

                        {/*<li className="favorites__item">*/}
                        {/*    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path d="M4.44531 2.22223H13.3342C13.6289 2.22223 13.9115 2.33929 14.1199 2.54767C14.3282 2.75604 14.4453 3.03866 14.4453 3.33334H4.44531V16.6667H13.3342V11.2222H14.4453V16.6667C14.4453 16.9614 14.3282 17.244 14.1199 17.4523C13.9115 17.6607 13.6289 17.7778 13.3342 17.7778H4.44531C4.15063 17.7778 3.86801 17.6607 3.65964 17.4523C3.45127 17.244 3.3342 16.9614 3.3342 16.6667V3.33334C3.3342 3.03866 3.45127 2.75604 3.65964 2.54767C3.86801 2.33929 4.15063 2.22223 4.44531 2.22223Z" fill="#7D7D7D"/>*/}
                        {/*        <path d="M11.6007 10.2555C11.6588 10.3053 11.706 10.3666 11.7394 10.4356C11.7727 10.5045 11.7915 10.5796 11.7944 10.6561C11.7974 10.7326 11.7845 10.8089 11.7566 10.8802C11.7286 10.9515 11.6863 11.0162 11.6321 11.0703C11.578 11.1245 11.5132 11.1669 11.4419 11.1948C11.3707 11.2227 11.2944 11.2356 11.2178 11.2327C11.1413 11.2297 11.0663 11.211 10.9973 11.1776C10.9284 11.1443 10.8671 11.097 10.8173 11.0389L7.60065 7.82221L10.8118 4.60554C10.918 4.51453 11.0547 4.46697 11.1946 4.47237C11.3344 4.47777 11.467 4.53573 11.566 4.63467C11.6649 4.73361 11.7229 4.86625 11.7283 5.00607C11.7337 5.14589 11.6861 5.2826 11.5951 5.38887L9.72287 7.22221H17.7784C17.9258 7.22221 18.0671 7.28074 18.1713 7.38493C18.2755 7.48911 18.334 7.63042 18.334 7.77776C18.334 7.92511 18.2755 8.06641 18.1713 8.1706C18.0671 8.27479 17.9258 8.33332 17.7784 8.33332H9.72287L11.6007 10.2555Z" fill="#7D7D7D"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className="favorites__cart">Выйти</p>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default HeaderRight;