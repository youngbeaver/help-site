import React from "react";
import styles from "./toolbar.module.css";

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <p className={styles.fasthelp}>Экстренная Помощь.РФ</p>
      <p className={styles.society}>общество неравнодушных</p>
    </div>
  );
};

export default Toolbar;
