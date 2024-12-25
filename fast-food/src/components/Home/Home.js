import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useLanguage } from '../lenguage/LanguageContext';
import img from '../pictures/burger.png';
import img2 from '../pictures/kartoshka.jpg';
import img3 from '../pictures/napitka.jpg';
import img4 from '../pictures/combo.jpg';

const Home = () => {
  const { t } = useLanguage(); // Access the `t` function for translations

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1 className="home-title">{t('welcomeTitle')}</h1>
          <p className="home-description">{t('welcomeDesc')}</p>
          <div className="home-buttons">
            <Link to="/menu">
              <button className="home-button">{t('exploreMenu')}</button>
            </Link>
            <Link to="/cart">
              <button className="home-button">{t('cart')}</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Items */}
      <section className="featured">
        <h2 className="section-title">{t('featuredItems')}</h2>
        <div className="featured-items">
          <div className="item">
            <img src={img} alt={t('cheeseBurger')} />
            <h3>{t('cheeseBurger')}</h3>
            <p>{t('cheeseBurgerDesc')}</p>
            <Link to="/menu">
              <button className="order-button">{t('orderNow')}</button>
            </Link>
          </div>
          <div className="item">
            <img src={img2} alt={t('frenchFries')} />
            <h3>{t('frenchFries')}</h3>
            <p>{t('frenchFriesDesc')}</p>
            <Link to="/menu">
              <button className="order-button">{t('orderNow')}</button>
            </Link>
          </div>
          <div className="item">
            <img src={img3} alt={t('refreshingDrink')} />
            <h3>{t('refreshingDrink')}</h3>
            <p>{t('refreshingDrinkDesc')}</p>
            <Link to="/menu">
              <button className="order-button">{t('orderNow')}</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="promotions">
        <h2 className="section-title">{t('specialOffers')}</h2>
        <div className="promotion">
          <img src={img4} alt={t('comboDeal')} />
          <div className="promotion-text">
            <h3>{t('comboDeal')}</h3>
            <p>{t('comboDealDesc')}</p>
            <Link to="/menu">
              <button className="order-button">{t('orderNow')}</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="testimonials">
        <h2 className="section-title">{t('customerReviews')}</h2>
        <div className="testimonial">
          <p>{t('review1')}</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial">
          <p>{t('review2')}</p>
          <span>- John Smith</span>
        </div>

        {/* Display additional customer reviews fetched from backend */}
        <div className="customer-reviews">
          {/* This section would dynamically render reviews fetched from the backend */}
        </div>
      </section>

      {/* Subscribe for Discounts */}
      <section className="newsletter">
        <h2 className="section-title">{t('subscribeDiscounts')}</h2>
        <form className="newsletter-form">
          <input type="email" placeholder={t('subscribePlaceholder')} />
          <button type="submit">{t('subscribeButton')}</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
