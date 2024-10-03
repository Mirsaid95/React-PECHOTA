import React from "react";
import style from '../card/fruit.module.scss';
import {data} from '../../data/data'; 

export const Card = () => {
    return (
        <div className={style.Card_style}>
            {data.cards.map((card) => (
            <div key={card.id} className={style.cards_items}>
              <img
                src={card.img}
                alt=""
                className={style.card_image}
              />
            </div>
      ))}
        </div>
    )
}