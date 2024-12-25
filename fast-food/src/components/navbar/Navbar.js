import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from '../lenguage/LanguageContext';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [menuActive, setMenuActive] = useState(false);
  const { language, switchLanguage } = useLanguage();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLanguageChange = (event) => {
    switchLanguage(event.target.value);
  };

  return (
    <div className="navbar">
      {/* Логотип */}
      <div className="logo">
        <Link to="/" className="logo-link">
          {language === 'en' ? 'FastFood' : language === 'ru' ? 'Фастфуд' : 'TezOvqat'}
        </Link>
      </div>

      {/* Меню для мобильных устройств */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Ссылки навигации */}
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

      {/* Переключатель языка с элементом select */}
      <div className="language-switcher">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="language-select"
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
