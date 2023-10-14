import React from 'react';
import s from './EmptyCart.module.scss';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className={s.empty_cart}>
      <span>\(o_o)/</span>
      <h2>Корзина пустая</h2>
      <p>
        Вероятней всего, вы еще не добавили книг.
        <br />
        Для того, чтобы выбрать товар, перейдите на главную страницу.
      </p>
      {/* <img src={CartGif} alt="Empty cart" /> */}
      <Link to="/" className={s.button}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
