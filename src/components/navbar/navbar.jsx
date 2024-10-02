import React from "react";
import style from "../navbar/navbar.module.scss";

export const Navbar = () => {
    return(
        <div className={style.navbar}>
            <div className={style.navbar_items}>
                <ul className={style.navbar_list}>
                    <li className={style.navbar_item}><a href="" className={style.navbar_link}>О ресноте</a></li>
                    <li className={style.navbar_item}><a href="" className={style.navbar_link}>Каталог</a></li>
                    <li className={style.navbar_item}><a href="" className={style.navbar_link}>Наши магазины</a></li>
                    <li className={style.navbar_item}><a href="" className={style.navbar_link}>Контакты</a></li>
                </ul>
                <div className={style.navbar_search_input}>
                    <input type="text" placeholder="Поиск по сайту" />
                    <span className={style.navbar_search}><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
        </div>
    )
}