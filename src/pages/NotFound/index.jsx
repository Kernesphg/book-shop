import React from 'react';
import s from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={s.error}>
      <span>404</span>
      <h2>Такой страницы не существует</h2>
      <p>К сожалению, не удалось найти страницу по вашему запросу.</p>
      <Link to="/" className={s.button}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default NotFound;
