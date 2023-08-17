import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";
import bel from "../../../assets/bel.png"

const LanguageSelector = () => {
  const { i18n } = useTranslation();


  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage)
  };

  return (
    <div className={styles.select_wrapper}>
      {i18n.language === "be" && <img src={bel} alt="bel_ico" />}
      <select onChange={handleChangeLanguage} defaultValue={i18n.language} className={styles.select} id="select">
        <option value="be">Бел</option>
        <option value="en">Eng</option>
        <option value="ru">Рус</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
