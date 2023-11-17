import React from "react";
import Toolbar from "./components/Toolbar";
import News from "./components/News.jsx";
import LittleNews from "./components/LittleNews.jsx";
import About from "./components/About.jsx";
import style from "./app.module.css";

const App = () => {
  return (
    <div>
      <Toolbar></Toolbar>
      <a className={style.request}>Подать просьбу</a>
      <a className={style.chat}>Написать в чат</a>
      <News></News>
      <LittleNews></LittleNews>
      <LittleNews></LittleNews>
      <LittleNews></LittleNews>
      <LittleNews></LittleNews>
      <LittleNews></LittleNews>
      <LittleNews></LittleNews>
      <LittleNews></LittleNews>
      <About></About>
    </div>
  );
};

export default App;
