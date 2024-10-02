import React from "react";
import style from "../banner/banner.module.scss";

export const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.title_btn}>
            <h1 className={style.hero_title}>Истина в качестве</h1>
            <p className={style.hero_list}>
              КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
              КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
            </p>
            <button className={style.hero_btn}>Купить</button>
      </div>
    </div>
  );
};
