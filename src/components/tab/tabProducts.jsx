import React from "react";
import style from '../tab/tab.module.scss';
import {data} from '../../data/data'; 

export const Tab = () =>{
    const [tab,setTab] = React.useState(1);


    return(
        <div className={style.tab_cards}>
            <div className={style.tab_button}>
                <button style={{backgroundColor: tab == 1 ? "goldenrod" : "", color: tab == 1 ? "white" : " "}} onClick={() => setTab(1)}>Hits</button>
                <button style={{backgroundColor: tab == 2 ? "blue" : " ", color: tab == 2 ? "white" : " "}} onClick={() => setTab(2)}>Sale</button>
                <button style={{backgroundColor: tab == 3 ? "red" : "", color: tab == 3 ? "white" : " "}} onClick={() => setTab(3)}>New</button>
            </div>

            <div className={style.tab_items}>
            {tab == 1 && (
                <div className={style.hits}>
                    {data.hit.map((item) => (
                        <div key={item.id} className={style.hits_card}>
                            <img src={item.img} alt="" className={style.hits_image} />
                            <div className={style.hits_items}>
                                <div className={style.hits_info_items}>
                                    <h1 className={style.hits_title}>{item.title}</h1>
                                    <p className={style.hits_info}>{item.info}</p>
                                    <p className={style.hits_sale}>{item.sale} ₽</p>
                                </div>
                                <div className={style.hits_priceSale}>
                                    <p className={style.hits_price}>{item.price} ₽</p>
                                    <span className={style.hits_salePrice}>-15% <p className={style.hits_econom}>Экономия 160 ₽</p></span>
                                </div>
                                <div className={style.hits_btns}>
                                    <button className={style.btn}>Купить</button>
                                    <button className={style.btn}>В 1 клик</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {tab == 2 && (
                <div className={style.sale}>
                    {data.sale.map((item) => (
                        <div key={item.id} className={style.sale_card}>
                            <img src={item.img} alt="" className={style.sale_image} />
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.info}</p>
                                <p>{item.sale} ₽</p>
                            </div>
                            <div>
                                <p>{item.price} ₽</p>
                                <span>-15% <p>Экономия 160 ₽</p></span>
                            </div>
                            <div>
                                <button>Купить</button>
                                <button>В 1 клик</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {tab == 3 && (
                <div className={style.new}>
                    {data.new.map((item) => (
                        <div key={item.id} className={style.new_card}>
                            <img src={item.img} alt="" className={style.new_image} />
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.info}</p>
                                <p>{item.sale} ₽</p>
                            </div>
                            <div>
                                <p>{item.price} ₽</p>
                                <span>-15% <p>Экономия 160 ₽</p></span>
                            </div>
                            <div>
                                <button>Купить</button>
                                <button>В 1 клик</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    )
} 