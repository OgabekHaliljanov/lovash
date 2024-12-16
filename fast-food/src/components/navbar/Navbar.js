import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from '../lenguage/LanguageContext';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { language, switchLanguage } = useLanguage();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          {language === 'en' ? 'FastFood' : language === 'ru' ? 'Фастфуд' : 'TezOvqat'}
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${menuActive ? 'active' : ''}`}>
        <Link to="/home" className="nav-link">
          {language === 'en' ? 'Home' : language === 'ru' ? 'Главная' : 'Bosh sahifa'}
        </Link>
        <Link to="/menu" className="nav-link">
          {language === 'en' ? 'Menu' : language === 'ru' ? 'Меню' : 'Menyu'}
        </Link>
        <Link to="/checkout" className="nav-link">
          {language === 'en' ? 'Checkout' : language === 'ru' ? 'Оформить заказ' : 'Buyurtma berish'}
        </Link>
      </div>
      <div className="language-switcher">
        <button onClick={() => switchLanguage('en')}>EN</button>
        <button onClick={() => switchLanguage('ru')}>RU</button>
        <button onClick={() => switchLanguage('uz')}>UZ</button>
      </div>
    </div>
  );
};

export default Navbar;
