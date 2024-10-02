import React from "react";
import logo from '../../assets/Vector.svg';
import style from '../header/header.module.scss';


export const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.headerItems}>
                <div className={style.headerLogo}>
                    <img src={logo} alt="" />
                    <h1 className={style.headerTitle}>PECHOTA</h1>
                </div>
                <p className={style.headerList}>Колбасы и мясные деликатесы</p>          
            </div>

            <div className={style.iconsItems}>
                <div className={style.iconStar}>
                    <span className={style.star}><i className="fa-regular fa-star"></i></span>
                    <p className={style.num}>3</p>
                </div>
                <span className={style.shopping}><i className="fa-solid fa-basket-shopping"></i></span>
                <span className={style.totalPrice}>Товаров: 3<p className={style.list}>6 540 ₽</p></span>
            </div>
        </div>
    )
}