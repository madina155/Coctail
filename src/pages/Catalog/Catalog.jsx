import React, {useEffect} from 'react';
// import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
// import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import CatalogRow from "./CatalogRow/CatalogRow";
import {getProducts} from "../../redux/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import CatalogSize from "./CatalogFilter/CatalogSize";


const Catalog = () => {

    const dispatch = useDispatch()
    const {status, error, data, filter} = useSelector((store) => store.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    return (
        <section className="catalog">
            <div className="container">
                {/*<BreadCrumbs/>*/}
                <h2 className="catalog__title">
                    {/*<CategoryTitle*/}
                    {/*    // data = {data}*/}
                    {/*/>*/}
                </h2>
                <div className="catalog__box">
                    <div className="catalog__right">

                        <p className="catalog__right-price">Цена, б.р</p>
                        <div className="catalog__price-scroll">
                            <p className="catalog__after">От</p>
                            <p className="catalog__before">До</p>
                        </div>

                        <div className="catalog__scroll-line"></div>
                        <div className="catalog__filter">
                            <CatalogSize/>
                        </div>
                    </div>
                    <div className="catalog__left">

                        {
                            status === 'loading' ?
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt=""/>
                                : status === 'resolve' ?
                                <div className="catalog__row">
                                    { data.filter((item) => {
                                        return filter.size ? item.sizes.find((el) => +el.size == +filter.size ).inStock : item
                                    }).map((item) => (
                                        <div className="catalog__box">
                                            <CatalogRow item={item}/>
                                        </div>
                                    ))
                                    }
                                </div>

                                : <h2>error</h2>

                        }


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;