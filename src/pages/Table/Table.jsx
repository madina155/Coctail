import React from 'react';
import {Link} from "react-router-dom";

const Table = () => {
    return (
        <section className="table">
            <div className="container">
                <div className="cart__back">
                    <Link to={'' +
                    'catalog'} className='cart__back-link' href="">
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="#FFFDF5"/>
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
};
//steak
//comercheski opit
//recruter
//dimple
// trello
//jira
//comercheski project
export default Table;