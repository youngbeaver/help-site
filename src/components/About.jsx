import React from "react";
import style from "./about.module.css";
import logo from "../image/logo/logo.jpg";

const About = () => {
  return (
    <div className={style.about}>
      <img className={style.logo} src={logo} alt="qq" />
      <p className={style.aboutText}>
        Мы неравнодушное общество, которому не всеравно будущие собственных сограждан. Мы готовы оказать практически любую помощь
        и поддержку не зависимо от ситуации. Если вам угрожают, избивают, обделяют, то обращайтесь обязательно к нам, обсуждайте.
        Помните, жизнь одна и нужно использовать ее по максимуму. Телефон доверия - +7 (999) 999-99-99
      </p>
    </div>
  );
};

export default About;
